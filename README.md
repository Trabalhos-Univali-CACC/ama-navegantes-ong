# AMA Navegantes — Site Institucional

Site de divulgação e informação da **AMA de Navegantes**, uma ONG dedicada ao apoio a pessoas com autismo e suas famílias.

Este é um **projeto voluntário** desenvolvido por um grupo de alunos da **Universidade do Vale do Itajaí (UNIVALI)**, com o objetivo de dar à AMA uma presença online que facilite a divulgação de suas ações, o acesso a informações sobre o autismo e o contato com a comunidade.

## Sobre a AMA Navegantes

A AMA (Associação de Amigos do Autista) de Navegantes é uma organização sem fins lucrativos focada na ajuda a pessoas com autismo, oferecendo acolhimento, orientação e apoio às famílias.

## Objetivos do projeto

- Divulgar a missão, os valores e as ações da ONG
- Informar a comunidade sobre o autismo
- Aproximar a AMA de voluntários, apoiadores e famílias

## Tecnologias

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com) e [lucide-react](https://lucide.dev) para componentes e ícones

## Como executar localmente

Pré-requisitos: [Node.js](https://nodejs.org) instalado.

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o site.

## Scripts disponíveis

- `npm run dev` — inicia o ambiente de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run start` — executa a build de produção
- `npm run lint` — verifica o código com o ESLint

## Estrutura do projeto

```
src/
├── app/            # Páginas, layout e estilos globais (App Router)
├── components/     # Componentes da interface (Header, Banner, Sobre, Team, etc.)
│   └── ui/         # Componentes reutilizáveis de UI
└── lib/            # Funções utilitárias
```
