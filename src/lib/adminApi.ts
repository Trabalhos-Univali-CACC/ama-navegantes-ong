// ----------------------------------------------------------------------------
// Funções usadas SÓ pela página /admin: login e requisições autenticadas
// (criar / editar / apagar). Elas enviam o token JWT no cabeçalho.
// ----------------------------------------------------------------------------

import { API_URL } from "./api";

const TOKEN_KEY = "ama_admin_token";

// ---- Token (fica guardado no navegador) ----
export function getToken(): string | null {
   if (typeof window === "undefined") return null;
   return localStorage.getItem(TOKEN_KEY);
}
export function setToken(token: string) {
   localStorage.setItem(TOKEN_KEY, token);
}
export function logout() {
   localStorage.removeItem(TOKEN_KEY);
}

// ---- Login: troca usuário/senha por um token ----
export async function login(username: string, password: string): Promise<boolean> {
   const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
   });
   if (!res.ok) return false;
   const data = await res.json();
   setToken(data.token);
   return true;
}

// Requisição com o token no cabeçalho
async function authFetch(path: string, options: RequestInit) {
   const token = getToken();
   return fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
         ...(options.headers ?? {}),
         Authorization: `Bearer ${token}`,
      },
   });
}

// GET autenticado (ex: ver as mensagens recebidas)
export async function getAuth<T>(path: string): Promise<T> {
   const res = await authFetch(path, { method: "GET" });
   if (!res.ok) throw new Error(`Erro ${res.status}`);
   return res.json();
}

// PUT (atualizar)
export async function putJson<T>(path: string, body: unknown): Promise<T> {
   const res = await authFetch(path, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
   });
   if (!res.ok) throw new Error(`Erro ${res.status}`);
   return res.json();
}

// POST (criar)
export async function postJson<T>(path: string, body: unknown): Promise<T> {
   const res = await authFetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
   });
   if (!res.ok) throw new Error(`Erro ${res.status}`);
   return res.json();
}

// DELETE (apagar)
export async function del(path: string): Promise<void> {
   const res = await authFetch(path, { method: "DELETE" });
   if (!res.ok) throw new Error(`Erro ${res.status}`);
}

// Upload de imagem (multipart/form-data)
export async function uploadImagem(identificador: string, arquivo: File) {
   const token = getToken();
   const form = new FormData();
   form.append("Identificador", identificador);
   form.append("Arquivo", arquivo);

   const res = await fetch(`${API_URL}/api/imagens`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
   });
   if (!res.ok) throw new Error(`Erro ${res.status}`);
   return res.json();
}
