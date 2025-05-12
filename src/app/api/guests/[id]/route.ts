import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        const url = new URL(req.url)
        const pathname = url.pathname
        const id:any = pathname.split("/").pop()
        const idNum:number = parseInt(id)

        const guest = await prisma.guest.findFirst({
            where:{
                id: idNum
            }
        })

        return NextResponse.json(guest)
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}