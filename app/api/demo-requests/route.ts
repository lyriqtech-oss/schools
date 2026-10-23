import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
const schema=z.object({name:z.string().trim().min(2).max(100),institution:z.string().trim().min(2).max(150),email:z.email().max(254),phone:z.string().trim().min(8).max(24),studentCount:z.enum(['até 200','201 a 500','501 a 1000','mais de 1000']),message:z.string().max(2000).optional(),website:z.string().optional()});
export async function POST(request:NextRequest){
  let body:unknown;try{body=await request.json()}catch{return NextResponse.json({error:'Dados inválidos.'},{status:400})}
  const parsed=schema.safeParse(body);if(!parsed.success)return NextResponse.json({error:'Confira os campos e tente novamente.'},{status:400});
  if(parsed.data.website)return NextResponse.json({ok:true});
  const url=process.env.SUPABASE_URL;const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!key)return NextResponse.json({error:'O formulário ainda não está disponível. Tente novamente mais tarde.'},{status:503});
  const {name,institution,email,phone,studentCount,message}=parsed.data;
  try{
    const response=await fetch(`${url.replace(/\/$/,'')}/rest/v1/demo_leads`,{method:'POST',headers:{'Content-Type':'application/json',apikey:key,Authorization:`Bearer ${key}`,Prefer:'return=minimal'},body:JSON.stringify({name,institution,email,phone,student_count:studentCount,message:message||null}),cache:'no-store'});
    if(!response.ok)throw new Error(`database ${response.status}`);
    const webhook=process.env.SALES_WEBHOOK_URL;
    if(webhook){try{await fetch(webhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({event:'demo_request',name,institution,email,phone,studentCount,message}),signal:AbortSignal.timeout(4000)})}catch{console.error('Sales webhook delivery failed')}}
    return NextResponse.json({ok:true},{status:201});
  }catch(err){console.error('Demo request persistence failed',err);return NextResponse.json({error:'Não foi possível enviar agora. Tente novamente mais tarde.'},{status:502})}
}
