<p align="center">
  <img src="./my-app/public/img/hero-image.png" alt="Identidade visual do projeto ECOUP: sustentabilidade e tecnologia" width="230" />
</p>

# 🌱 ECOUP — Gamificação Sustentável

**Projeto acadêmico da FIAP para o desafio SoulUp — Front-end, Sprint 4 (2026).**

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## 1. Apresentação e objetivo

A **ECOUP** é uma aplicação web do tipo **Single Page Application (SPA)** desenvolvida com React, Vite e TypeScript. Sua proposta é estimular a participação da comunidade SoulUp em práticas sustentáveis por meio de uma experiência de gamificação.

Na Sprint 4, o Front-end foi integrado à **API REST em Java/Spring Boot**, utilizada para cadastrar participantes e registrar e consultar ações sustentáveis armazenadas em um banco Oracle.

O sistema apresenta os **Pontos Ecoa** como uma **estimativa visual associada à categoria** da ação. O dashboard mostra indicadores do estudo de caso SoulUp, não métricas obtidas da API Java. A validação automática de evidências por inteligência artificial, a autenticação individual, o ranking mensal real e a concessão de subsídios na conta de energia **não estão implementados neste protótipo**; fazem parte da evolução proposta para a ECOUP.

## 2. Páginas e funcionalidades

| Página / rota | Funcionalidade |
| --- | --- |
| `/` | Página inicial, proposta ECOUP e atalhos de navegação |
| `/participar` | Cadastro de participante pela API Java, com validação e feedback |
| `/simulador` | Formulário de registro de ações sustentáveis (`POST`) |
| `/acoes` | Listagem de ações da API (`GET`), com estados de carregamento, erro e lista vazia |
| `/acoes/:codigo` | Consulta individual de uma ação (`GET`), com categoria, data, status e link de evidência |
| `/dashboard` | Indicadores históricos do estudo de caso SoulUp e detalhes interativos |
| `/recompensas` | Catálogo ilustrativo dos benefícios planejados |
| `/recompensas/:id` | Detalhamento das recompensas propostas |
| `/sobre` | Propósito, contexto, solução e tecnologias do projeto |
| `/faq` | Perguntas frequentes sobre a proposta e sobre o protótipo |
| `/contato` | Formulário demonstrativo com validação local; **não envia e-mail** |
| `/integrantes` | Equipe, fotos, RMs, turmas e perfis profissionais |
| URL inexistente | Página personalizada de endereço não encontrado (404) |

### Jornada de cadastro e registro

1. A pessoa acessa **Participar** e cadastra nome e e-mail, enviados à API Java.
2. O código retornado pela API é armazenado temporariamente no `sessionStorage` da aba para identificar o participante durante a demonstração. **Esse mecanismo não constitui login ou autenticação.**
3. Em **Registrar ação**, a pessoa informa um título, escolhe uma categoria (**Mobilidade**, **Reciclagem** ou **Energia**) e preenche o link da evidência.
4. A aplicação envia os dados ao backend e redireciona para a página de detalhes do novo registro.
5. Em **Ações**, é possível listar os registros da API e abrir o detalhe individual de cada um.

> **Uso responsável:** utilize dados fictícios para testar o protótipo. O sistema armazena apenas o **link** da evidência, não recebe o arquivo de vídeo nem verifica seu conteúdo automaticamente. Evite dados pessoais e links privados.

## 3. Tecnologias utilizadas

- **React e React DOM:** construção da interface com componentes e Hooks.
- **Vite:** execução em desenvolvimento e geração da versão de produção.
- **TypeScript:** tipagem de dados, interfaces, Union Types e Intersection Types.
- **Tailwind CSS:** estilização e adaptação para celular, tablet e desktop.
- **React Router DOM:** rotas estáticas e dinâmicas, parâmetros e redirecionamentos.
- **React Hook Form:** gerenciamento de formulários e validações.
- **Fetch API nativa:** comunicação HTTP com o backend, sem Axios.
- **Java / Spring Boot:** API REST da disciplina de Domain Driven Design Using Java.
- **Oracle Database:** persistência das informações pelo backend Java.
- **Git e GitHub:** versionamento e colaboração da equipe.
- **Render:** hospedagem da API Java.
- **Vercel:** hospedagem do Front-end React.

## 4. Estrutura de pastas

```text
ECOUP (raiz do repositório)
├── README.md
└── my-app/
    ├── .env.example             # Exemplo de variável de ambiente da API
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vercel.json              # Redirecionamento de rotas da SPA
    ├── vite.config.ts
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    ├── public/
    │   └── img/                 # Ilustrações, capturas e fotos da equipe
    └── src/
        ├── App.tsx              # Layout com cabeçalho, conteúdo e rodapé
        ├── main.tsx             # Rotas React Router
        ├── global.css           # Importação do Tailwind CSS
        ├── components/
        │   ├── Botao/
        │   ├── Cabecalho/
        │   ├── Cards/
        │   └── Rodape/
        ├── routes/
        │   ├── AcaoDetalhe/
        │   ├── Acoes/
        │   ├── Contato/
        │   ├── Dashboard/
        │   ├── Faq/
        │   ├── Home/
        │   ├── Integrantes/
        │   ├── NaoEncontrada/
        │   ├── Participar/
        │   ├── RecompensaDetalhes/
        │   ├── Recompensas/
        │   ├── Simulador/
        │   └── Sobre/
        ├── services/
        │   ├── api.ts            # Requisições à API Java
        │   └── participante.ts   # Identificação temporária na sessão
        └── types/
            └── types.ts         # Interfaces, tipos e valores ilustrativos
```

## 5. Como Usar — links, instalação e execução

### Links do projeto

| Recurso | Endereço |
| --- | --- |
| **GitHub do Front-end** | https://github.com/nicolaspk/ecoup-sprint4-front |
| **Site público na Vercel** | https://ecoup-sprint4-front.vercel.app |
| **API Java publicada no Render** | https://ecoup-sprint4-java.onrender.com |
| **GitHub do backend Java** | https://github.com/nicolaspk/ecoup-sprint4-java |
| **Vídeo de apresentação da Sprint 4 (YouTube)** | **PENDENTE:** inserir o link do vídeo novo de até 3 minutos antes da entrega |

> **Atenção antes de entregar:** o vídeo da Sprint 3 não demonstra a implementação final da Sprint 4. Substitua a indicação **PENDENTE** pelo link correto do novo vídeo publicado no YouTube. Não entregue este README com essa pendência.

### Pré-requisitos

- Git e Node.js/npm compatíveis com o Vite utilizado no projeto.
- Conexão com a internet para instalar dependências e acessar a API publicada.

### Clonar o repositório

```bash
git clone https://github.com/nicolaspk/ecoup-sprint4-front.git
cd ecoup-sprint4-front
cd my-app
```

A branch **`main`** contém a versão integrada da Sprint 4.

### Instalar dependências

No terminal, dentro de `my-app`:

```bash
npm ci
```

### Configurar a API

O arquivo `.env.example` contém um exemplo de URL. Para executar o Front-end usando a API publicada, crie `my-app/.env.local` com:

```dotenv
VITE_API_URL=https://ecoup-sprint4-java.onrender.com
```

Se o backend Java estiver em execução local na porta 8080, é possível usar `VITE_API_URL=http://localhost:8080` em vez da URL do Render.

O arquivo `src/services/api.ts` usa `VITE_API_URL` e, caso ela não esteja definida, utiliza `http://localhost:8080`. Na Vercel, a variável deve apontar para a API publicada no Render. **Não inclua senhas ou credenciais Oracle no Front-end.**

### Executar localmente

```bash
npm run dev
```

Abra o endereço mostrado no terminal, normalmente `http://localhost:5173/`.

### Verificar a compilação de produção

```bash
npm run build
```

Para visualizar localmente os arquivos produzidos pelo build:

```bash
npm run preview
```

> As operações de cadastro e consulta dependem da disponibilidade da API Java e da conexão dela com o banco Oracle.

## 6. Integração com a API Java

A API REST, desenvolvida com Java e Spring Boot e hospedada no Render, é responsável por gravar e recuperar os dados de participantes e ações sustentáveis armazenados no Oracle.

| Método | Endpoint | Utilização no Front-end |
| --- | --- | --- |
| `POST` | `/api/usuarios` | Cadastrar participante na página Participar |
| `GET` | `/api/usuarios/{codigo}` | Consultar participante identificado durante a sessão |
| `POST` | `/api/acoes` | Registrar ação sustentável |
| `GET` | `/api/acoes` | Listar ações registradas |
| `GET` | `/api/acoes/{codigo}` | Consultar detalhes de uma ação |

O backend também disponibiliza endpoints `PUT` e `DELETE` para usuários e ações, mas o Front-end não possui telas de edição ou exclusão. A Sprint 4 de Front-end exige pelo menos uma operação de escrita, atendida pelos formulários de cadastro e registro.

As requisições ficam concentradas em **`src/services/api.ts`**. Os tipos das respostas e das requisições ficam em **`src/types/types.ts`**. As páginas mostram feedback durante o carregamento, mensagens de erro e estados vazios quando aplicável.

O backend salva as ações com status `REGISTRADA`, o que significa que o registro foi armazenado — **não que a evidência tenha sido aprovada por IA**.

### Pontos Ecoa ilustrativos

| Categoria | Pontos de referência na interface |
| --- | ---: |
| Mobilidade | 30 |
| Reciclagem | 40 |
| Energia | 50 |

Esses pontos são apenas exemplos visuais calculados no React. O sistema não grava saldo de pontos, não calcula impacto ambiental certificado e não concede benefícios automaticamente.

## 7. Publicação na Vercel

**Front-end publicado:** https://ecoup-sprint4-front.vercel.app

A aplicação foi configurada na Vercel a partir do repositório GitHub com:

| Configuração | Valor |
| --- | --- |
| Branch de produção | `main` |
| Root Directory | `my-app` |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Variável de ambiente | `VITE_API_URL=https://ecoup-sprint4-java.onrender.com` |

O arquivo `my-app/vercel.json` configura a reescrita de URLs para que as rotas internas da SPA possam ser acessadas diretamente e atualizadas no navegador.

A versão publicada foi verificada nas rotas principais, incluindo listagem e detalhes de ações que consultam a API Java remotamente.

## 8. Validação e demonstração da Sprint 4

Durante a integração, foram realizados testes de:

- Compilação de produção com `npm run build` (TypeScript + Vite).
- Cadastro de participante e de ação pela API Java publicada.
- Consulta de uma ação, listagem de registros e atualização direta da rota dinâmica.
- Estados de lista vazia e navegação para a página 404.
- Navegação das páginas Sobre, FAQ, Contato, Dashboard e Recompensas.
- Responsividade nas resoluções de **390px (mobile)**, **768px (tablet)** e **1440px (desktop)**.
- Navegação e consulta de dados na implantação pública da Vercel.

**Vídeo de apresentação:** o novo vídeo demonstrativo da Sprint 4 deverá ser publicado no YouTube com **até 3 minutos**. Depois de publicado, insira o link na tabela **Como Usar — links do projeto** antes de realizar a entrega.

## 9. Imagens e ícones do projeto

O projeto utiliza imagens armazenadas em `my-app/public/img/`, além de ícones ilustrativos nos componentes da interface.

<p align="center">
  <img src="./my-app/public/img/hero-image.png" alt="Ilustração de sustentabilidade e tecnologia da ECOUP" width="260" />
</p>

<p align="center">
  <img src="./my-app/public/img/dashboard.png" alt="Imagem de referência do dashboard SoulUp" width="680" />
</p>

As capturas de tela são registros visuais do projeto e podem não representar cada atualização da Sprint 4. A aplicação publicada na Vercel é a referência para verificação funcional.

## 10. Autores e créditos

A equipe responsável pelo projeto ECOUP é composta por:

| Foto | Integrante | RM | Turma | GitHub e LinkedIn |
| :---: | --- | --- | --- | --- |
| <img src="./my-app/public/img/foto-maria1.jpeg" alt="Foto de Maria Eduarda Escandor" width="72" /> | **Maria Eduarda Escandor** | 568216 | 1TDSPO | [GitHub](https://github.com/mariabatistaescandor-gif) · [LinkedIn](https://www.linkedin.com/in/maria-eduarda-escandor-5b1587359/) |
| <img src="./my-app/public/img/foto-erick.jpeg" alt="Foto de Erick Menezes" width="72" /> | **Erick Menezes** | 570325 | 1TDSPF | [GitHub](https://github.com/DevErick-658) · [LinkedIn](https://www.linkedin.com/in/erick-menezes-b53009232/) |
| <img src="./my-app/public/img/foto-maria2.png" alt="Foto de Maria Eduarda Lopes de Lima" width="72" /> | **Maria Eduarda Lopes de Lima** | 572425 | 1TDSPO | [GitHub](https://github.com/mariaeduardaalima) · [LinkedIn](https://www.linkedin.com/in/maria-eduarda-lopes-de-lima-1291b6289/) |
| <img src="./my-app/public/img/matheus.png" alt="Foto de Matheus Yudi" width="72" /> | **Matheus Yudi** | 571245 | 1TDSPF | [GitHub](https://github.com/ogmatheus7) · [LinkedIn](https://www.linkedin.com/in/matheus-yudi7/) |
| <img src="./my-app/public/img/foto-nicolas.jpg" alt="Foto de Nicolas Sousa" width="72" /> | **Nicolas Sousa** | 574141 | 1TDSPH | [GitHub](https://github.com/nicolaspk) · [LinkedIn](https://www.linkedin.com/in/nicolas-sousaa/) |

As fotos utilizadas na tabela são as mesmas armazenadas em `my-app/public/img/` e exibidas na página `/integrantes`.

O projeto foi desenvolvido como atividade acadêmica colaborativa para a FIAP. O histórico de commits e Pull Requests do GitHub registra as contribuições efetivamente realizadas por cada participante.

## 11. Contato

E-mail informado pela equipe: **[materiafiap@gmail.com](mailto:materiafiap@gmail.com)**.

A aplicação também oferece a página `/contato`, com um formulário demonstrativo que valida os campos localmente, **sem enviar mensagens por e-mail**.

---

<p align="center">ECOUP · Challenge FIAP · 2026</p>
