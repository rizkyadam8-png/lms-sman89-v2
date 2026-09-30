'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    document.cookie = `simpatik_token=dummy_token_${Date.now()}; path=/; max-age=604800`
    alert('Login Sukses!')
    router.push('/dashboard')
  }

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#0f172a', color:'white'}}>
      <div style={{background:'#1e293b', padding:'32px', borderRadius:'12px', width:'380px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'bold'}}>LMS SMAN 89</h1>
        <p style={{fontSize:'14px', color:'#94a3b8', marginBottom:'24px'}}>SSO simpatik89.id</p>
        <input 
          style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#334155', border:'none', marginBottom:'16px', color:'white'}}
          placeholder="email@sman89.sch.id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin} style={{width:'100%', background:'#2563eb', padding:'12px', borderRadius:'8px', fontWeight:'bold', border:'none', color:'white', cursor:'pointer'}}>
          MASUK
        </button>
      </div>
    </div>
  )
}