import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// Instancia e exporta o PrismaClient
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});