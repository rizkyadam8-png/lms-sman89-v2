'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(135deg,#0f172a,#1e3a8a)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', padding:'20px'}}>
      <div style={{background:'white', borderRadius:'24px', maxWidth:'420px', width:'100%', padding:'40px', boxShadow:'0 20px 60px rgba(0,0,0,0.3)'}}>
        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <div style={{width:'64px', height:'64px', background:'#2563eb', borderRadius:'16px', margin:'0 auto 16px', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'800', fontSize:'24px'}}>89</div>
          <h1 style={{fontSize:'28px', fontWeight:'800', color:'#0f172a', margin:'0'}}>SIMPATIK 89</h1>
          <p style={{color:'#64748b', margin:'8px 0 0', fontSize:'14px'}}>SMAN 89 Jakarta - LMS Terintegrasi</p>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          <input type="text" placeholder="NIS / NIP / Email" style={{padding:'14px 16px', border:'1px solid #e2e8f0', borderRadius:'12px', fontSize:'14px', outline:'none'}} />
          <input type="password" placeholder="Password / Token SSO" style={{padding:'14px 16px', border:'1px solid #e2e8f0', borderRadius:'12px', fontSize:'14px', outline:'none'}} />
          
          <Link href="/dashboard" style={{background:'#2563eb', color:'white', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:'600', textDecoration:'none', marginTop:'8px'}}>
            Masuk ke LMS
          </Link>

          <a href="#" style={{background:'#f1f5f9', color:'#0f172a', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:'600', textDecoration:'none', fontSize:'14px'}}>
            Login dengan SSO SIMPATIK89.ID
          </a>
        </div>

        <p style={{textAlign:'center', fontSize:'12px', color:'#94a3b8', marginTop:'24px'}}>
          Bank Soal AI • Ujian Online • Kelas Digital<br/>© 2026 SMAN 89 Jakarta
        </p>
      </div>
    </div>
  )
}