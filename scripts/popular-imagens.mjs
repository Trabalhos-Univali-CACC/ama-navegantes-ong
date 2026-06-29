// ----------------------------------------------------------------------------
// Script para popular o backend com as IMAGENS que já estão no front.
//
// Os textos e listas são inseridos automaticamente pelo backend (DbSeeder) na
// primeira vez que ele roda. As imagens precisam ser enviadas por aqui, porque
// são arquivos.
//
// Como usar (com o backend rodando):
//   node scripts/popular-imagens.mjs
//   (ou:  npm run popular-imagens)
//
// Variáveis opcionais (caso tenha trocado algo no backend):
//   API_URL    (padrão http://localhost:5080)
//   ADMIN_USER (padrão admin)
//   ADMIN_PASS (padrão admin)
// ----------------------------------------------------------------------------

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API = process.env.API_URL ?? "http://localhost:5080";
const USUARIO = process.env.ADMIN_USER ?? "admin";
const SENHA = process.env.ADMIN_PASS ?? "admin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.resolve(__dirname, ".."); // pasta do projeto do front

// Identificador usado no site  ->  arquivo da imagem no front
const imagens = [
   { identificador: "logo", arquivo: "public/imgs/ama_logo.png" },
   { identificador: "ciptea_card", arquivo: "public/imgs/nfsttn-Photoroom.png" },
   { identificador: "parceiro_navegantes", arquivo: "assets/logos/navegantes.png" },
   { identificador: "parceiro_fcee", arquivo: "assets/logos/fcee.png" },
   { identificador: "parceiro_gente_especial", arquivo: "assets/logos/gente_especial.png" },
   { identificador: "parceiro_sc", arquivo: "assets/logos/sc.png" },
];

async function main() {
   // 1) Faz login para pegar o token
   const loginRes = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: USUARIO, password: SENHA }),
   });

   if (!loginRes.ok) {
      console.error("Falha no login. Confira o backend, o usuário e a senha.");
      process.exit(1);
   }

   const { token } = await loginRes.json();
   console.log("Login OK. Enviando imagens...");

   // 2) Envia cada imagem
   for (const img of imagens) {
      const caminho = path.join(raiz, img.arquivo);

      if (!fs.existsSync(caminho)) {
         console.warn(`- Pulando "${img.identificador}": arquivo não encontrado (${img.arquivo})`);
         continue;
      }

      const buffer = fs.readFileSync(caminho);
      const form = new FormData();
      form.append("Identificador", img.identificador);
      form.append("Arquivo", new Blob([buffer]), path.basename(caminho));

      const res = await fetch(`${API}/api/imagens`, {
         method: "POST",
         headers: { Authorization: `Bearer ${token}` },
         body: form,
      });

      if (res.ok) {
         console.log(`  ✔ ${img.identificador}`);
      } else {
         console.error(`  ✗ erro ao enviar ${img.identificador} (HTTP ${res.status})`);
      }
   }

   console.log("Concluído! Recarregue o site para ver as imagens.");
}

main().catch((e) => {
   console.error(e);
   process.exit(1);
});
