import { appRouter } from '@/trpc';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextResponse } from 'next/server';

const handler =async(req:Request,res:NextResponse)=>{

    
        console.log(`incoming request ${req.url}`);
  
    fetchRequestHandler({
        endpoint:"/api/trpc",
        req,
        router:appRouter,
        createContext:()=>({}),
        

    })
     return res.json({ message: "sucess" });
        
   
        
    
    
     
}

export {handler as GET,handler as POST}
