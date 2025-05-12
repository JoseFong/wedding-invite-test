import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        const guests = await prisma.guest.findMany()
        return NextResponse.json(guests)
    }catch(e:any){
        return NextResponse.json({message:"Error 500: "+e.message},{status:500})
    }
}