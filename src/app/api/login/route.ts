import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function POST(req:Request){
    try{
        const body = await req.json()
        if(body.password===process.env.ADMIN_PASS!){
            const token = jwt.sign({user:"Usuario"},process.env.JWT_SECRET!,{expiresIn:"1d"})
            const cookieStore = await cookies()
            cookieStore.set({name:"user",value:token,path:"/",httpOnly:true,maxAge:24*60*60})

            return NextResponse.json({status:200})
        }
        return NextResponse.json({message:"Contraseña incorrecta"},{status:400})
    }catch(e:any){
        return NextResponse.json({message:"Error: "+e.message},{status:500})
    }
}