# Resumo da Configuração Prisma com MongoDB

Aqui está o resumo passo a passo do que foi feito para configurar o projeto, com os respectivos comandos:

## 1. Inicialização do Projeto
Criamos o arquivo de configuração do Node.js (`package.json`).
```bash
npm init -y
```

## 2. Instalação das Dependências
Instalamos o Prisma (ferramenta de desenvolvimento) e o Prisma Client (biblioteca de uso).
```bash
npm install prisma@5 @prisma/client@5 --save-dev dotenv
```
*(Nota: Utilizamos a versão 5 para garantir estabilidade e compatibilidade com a configuração padrão, ignorando alterações da v7).*

## 3. Configuração do Banco de Dados (Introspecção)
O Prisma conectou ao seu MongoDB (usando o link no `.env`) e detectou automaticamente as tabelas/coleções para criar o arquivo `schema.prisma`.
```bash
npx prisma db pull
```

## 4. Geração do Cliente Prisma
Com base no schema detectado, geramos o código JavaScript necessário para você manipular o banco.
```bash
npx prisma generate
```

## 5. Teste de Conexão
Rodamos um script simples para confirmar que tudo está funcionando e trazendo dados.
```bash
node test-connection.js
```
