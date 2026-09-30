'use client'
import Link from 'next/link'
export default function DashboardPage() {
  return (
    <div style={{minHeight:'100vh', background:'#f1f5f9', padding:'20px'}}>
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h1 style={{fontSize:'24px', fontWeight:'900'}}>✅ DASHBOARD LMS SMAN 89</h1>
          <a href="/login" onClick={()=>{document.cookie='token=; Max-Age=0; path=/;'}} style={{background:'#ef4444', color:'white', padding:'8px 16px', borderRadius:'8px', textDecoration:'none', fontWeight:'bold', fontSize:'13px'}}>LOGOUT</a>
        </div>
        <p style={{color:'#22c55e', fontWeight:'bold', fontSize:'13px', marginTop:'4px'}}>● Token AKTIF - SSO simpatik89.id</p>
        <div style={{marginTop:'24px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'16px'}}>
          <div style={{background:'white', padding:'20px', borderRadius:'14px'}}>📚<br/><b>Kelas Saya</b><br/><small style={{color:'#64748b'}}>12 Kelas</small></div>
          <div style={{background:'white', padding:'20px', borderRadius:'14px'}}>📝<br/><b>Tugas</b><br/><small style={{color:'#64748b'}}>8 Tugas Baru</small></div>
          <div style={{background:'white', padding:'20px', borderRadius:'14px'}}>📊<br/><b>Nilai</b><br/><small style={{color:'#64748b'}}>Avg 88.5</small></div>
          <Link href="/bank-soal-ai" style={{textDecoration:'none'}}><div style={{background:'#7c3aed', padding:'20px', borderRadius:'14px', color:'white', cursor:'pointer', border:'2px solid #a78bfa'}}>🤖<br/><b>Bank Soal AI</b><br/><small>Generate Otomatis →</small></div></Link>
        </div>
      </div>
    </div>
  )
}