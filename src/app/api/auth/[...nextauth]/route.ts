import NextAuth from 'next-auth';
const handler = NextAuth({
    // ADD PROVIDERS HERE
});

export const GET = handler;
export const POST = handler;