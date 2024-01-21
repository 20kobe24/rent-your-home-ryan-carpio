import { PrismaClient } from "@prisma/client";

//prisma importieren und ihn ein global initial geben
declare global {
  var prisma: PrismaClient | undefined;

}

// verwendet globalThis oder erstellt ein neuen PrismClient
const client = globalThis.prisma || new PrismaClient();
// if checkt ob wir im development sind, in dem es checkt ob wir in production sind
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
