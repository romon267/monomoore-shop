// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalAny.prisma) {
    globalAny.prisma = new PrismaClient();
  }
  prisma = globalAny.prisma;
}

export default prisma;
