# Integração do site com o backend (AMA Navegantes API)

Agora **todo o texto e as imagens do site vêm do backend**. Existe também uma
página **`/admin`** para editar tudo, e o que for editado aparece na página
principal (porque as duas leem do mesmo backend).

---

## 1. Como rodar tudo (passo a passo)

### Passo 1 — Banco de dados (uma vez)

> ⚠️ **Importante:** o backend cria as tabelas sozinho **só quando o banco NÃO
> existe ainda**. Como o banco `ama_navegantes` já foi criado antes (com menos
> tabelas), você precisa **apagar e deixar o backend criar de novo** com todas
> as tabelas:

No pgAdmin ou no terminal do PostgreSQL:

```sql
DROP DATABASE IF EXISTS ama_navegantes;
```

Não precisa criar de novo na mão — o backend cria.

### Passo 2 — Rodar o backend

Na pasta do backend (`.../C#/AMA Navegantes API/AMA Navegantes API`):

```bash
dotnet run
```

Na primeira vez ele cria o banco, todas as tabelas e já insere **todos os
textos e listas** que existem hoje no site (apresentação, missão, equipe,
parceiros, FAQ, etapas da CIPTEA, etc.).

O backend fica em `http://localhost:5080` (Swagger em `/swagger`).

### Passo 3 — Enviar as imagens para o backend

As imagens (logo, cartão CIPTEA e logos dos parceiros) são arquivos, então vão
por um script. Com o backend rodando, na pasta do **front**:

```bash
npm run popular-imagens
```

Ele faz login, lê as imagens da pasta do front e envia para o backend.

### Passo 4 — Rodar o site

Na pasta do front:

```bash
npm run dev
```

- Site: `http://localhost:3000`
- Painel de edição: `http://localhost:3000/admin`

Como os textos e imagens já foram populados, o site aparece **igual ao de hoje**.

---

## 2. A página /admin

- Acesse `http://localhost:3000/admin`.
- Faça login com o usuário/senha definidos no `appsettings.json` do backend
  (padrão: **admin / admin**).
- Edite os textos de cada seção, as listas (membros, parceiros, FAQ, etapas,
  benefícios, links, contatos) e troque as imagens.
- Clique em **Salvar** / **Adicionar** / **Remover**. Recarregue o site para ver
  a mudança.

---

## 3. Endereço do backend (opcional)

Por padrão o site fala com `http://localhost:5080`. Se o backend estiver em outro
endereço, crie um arquivo **`.env.local`** na pasta do front com:

```
NEXT_PUBLIC_API_URL=http://localhost:5080
```

---

## 4. O que vem do backend e o que ainda é fixo

**Vem do backend (editável no /admin):**
- Textos de todas as seções (Banner, Quem Somos, Equipe, Informações, CIPTEA,
  Parcerias, Doações, Contato).
- Listas: membros da equipe, itens de FAQ, etapas/benefícios/links da CIPTEA,
  parceiros e dados de contato.
- Imagens: logo, cartão CIPTEA e logos dos parceiros.

**Ainda fixo no código** (itens estruturais ou decorativos — dá para mover para o
backend depois, seguindo o mesmo padrão):
- Menu do topo e links do rodapé (são âncoras para as seções).
- Os 3 números do banner (Fundação 2016, etc.) e os 4 "Valores" de Quem Somos.
- Ícones das seções e redes sociais.
