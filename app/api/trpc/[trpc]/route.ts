import { appRouter } from '@/trpc';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextResponse } from 'next/server';

const handler =(req:Request,res:NextResponse)=>{
    fetchRequestHandler({
        endpoint:"/api/trpc",
        req,
        router:appRouter,
        createContext:()=>({}),

    })
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}

export {handler as GET,handler as POST}
