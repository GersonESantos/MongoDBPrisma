import { PrismaClient } from '@prisma/client';

// Instancia e exporta o PrismaClient
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});