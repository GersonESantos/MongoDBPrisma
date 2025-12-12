# Guia Passo a Passo: Integrando Prisma com MongoDB

Este documento explica detalhadamente como configuramos o Prisma ORM com MongoDB neste projeto (pasta `server/20`), replicando a estrutura funcional.

## VIsão Geral
O objetivo é criar uma aplicação Node.js simples que se conecta a um banco de dados MongoDB existente para ler dados de usuários.

---

## 1. Preparação e Inicialização
Primeiro, transformamos a pasta em um projeto Node.js e instalado as bibliotecas necessárias.

### 1.1. Inicializar o `package.json`
O comando `npm init -y` cria o arquivo que gerencia as dependencias do projeto.

### 1.2. Instalar Dependências
Instalamos três pacotes principais:
*   **`express`**: Framework web para criar nosso servidor API.
*   **`prisma`**: Ferramenta de linha de comando (CLI) usada apenas durante o desenvolvimento (para formatar schema, gerar cliente, etc). Instalada como dependência de desenvolvimento (`-D`).
*   **`@prisma/client`**: A biblioteca que nosso código JavaScript usa para *falar* com o banco de dados em tempo de execução.

**Importante**: Forçamos a versão `5.22.0` para manter compatibilidade com o projeto de referência e evitar erros de validação que ocorreram na versão 7.x mais recente.

```bash
npm install express @prisma/client@5.22.0
npm install prisma@5.22.0 --save-dev
```

---

## 2. Configurando o Prisma
A configuração do Prisma vive dentro da pasta `prisma/`.

### 2.1. O Schema (`prisma/schema.prisma`)
Este é o cérebro do Prisma. Ele diz onde está o banco de dados e como são os dados.

*   **Generator**: Diz ao Prisma para criar um cliente JavaScript (`prisma-client-js`) baseado neste arquivo.
*   **Datasource**: Define que usamos `mongodb` e a URL vem do arquivo `.env`.
*   **Model**: Define a *forma* dos nossos dados. Mapeamos o modelo `User` para a coleção correspondente no MongoDB.
    *   `@id @default(auto()) @map("_id") @db.ObjectId`: Configuração padrão para IDs no MongoDB.

### 2.2. Variáveis de Ambiente (`.env`)
O arquivo `.env` guarda informações sensíveis, como a senha do banco.
```env
DATABASE_URL="sua_string_de_conexao_mongodb_aqui"
```

---

## 3. Gerando o Cliente
Sempre que alteramos o `schema.prisma` (ou instalamos o Prisma pela primeira vez), precisamos rodar este comando:

```bash
npx prisma generate
```

**O que ele faz?** Ele lê seu arquivo `schema.prisma` e cria um código personalizado dentro de `node_modules/@prisma/client`. É por isso que você consegue usar `prisma.user.findMany()` com autocompletar no seu editor.

---

## 4. O Código do Servidor (`index.js`)
Criamos um servidor Express simples para testar.

1.  **Importação**: `const { PrismaClient } = require('@prisma/client')`
2.  **Instância**: `const prisma = new PrismaClient()` inicia a conexão.
3.  **Rota `/usuarios`**:
    *   Usamos `await prisma.user.findMany()` para buscar todos os usuários.
    *   É uma operação assíncrona, por isso usamos `async/await`.

---

## 5. Rodando o Projeto
Para iniciar o servidor:

```bash
node index.js
```

O servidor iniciará na porta 3000. Você pode acessar `http://localhost:3000/usuarios` no seu navegador para ver os dados vindos do MongoDB.
