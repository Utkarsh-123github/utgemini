import {PrismaClient} from '@prisma/client';

// PrismaClient is attached to the 'global' object in development to prevent exhausting your database connection limit.

const PrismaClientSingleton = ()=>{
    return new PrismaClient();
}
type PrismaClientSingleton = ReturnType<typeof PrismaClientSingleton>;
const globalForPrisma = global as unknown as {prisma: PrismaClient | undefined};
const prisma = globalForPrisma.prisma ?? PrismaClientSingleton();
export default prisma;
