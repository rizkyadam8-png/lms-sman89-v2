'use client'
import { useState } from 'react'

export default function BankSoalPage() {
  const [mapel, setMapel] = useState('Matematika')
  const [kelas, setKelas] = useState('10')
  const [jumlah, setJumlah] = useState(5)
  const [loading, setLoading] = useState(false)
  const [soal, setSoal] = useState<string[]>([])

  const generateSoal = () => {
    setLoading(true)
    setTimeout(() => {
      const dummy = Array.from({length: jumlah}, (_, i) => 
        `${i+1}. [${mapel} Kelas ${kelas}] Jelaskan konsep ${mapel} tentang materi ke-${i+1} secara detail dan berikan contoh penerapannya di kehidupan sehari-hari SMAN 89?`
      )
      setSoal(dummy)
      setLoading(false)
      window.scrollTo({top: 0, behavior: 'smooth'})
    }, 800)
  }

  return (
    <div style={{minHeight:'100vh', background:'#f8fafc', padding:'16px', overflowY:'auto'}}>
      <div style={{maxWidth:'900px', margin:'0 auto', paddingBottom:'100px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'bold', color:'#0f172a'}}>🤖 Bank Soal AI - SMAN 89</h1>
        <p style={{color:'#64748b', fontSize:'13px'}}>Generator Soal Otomatis Terintegrasi SSO simpatik89.id</p>

        <div style={{marginTop:'16px', background:'white', padding:'16px', borderRadius:'12px', position:'sticky', top:'10px', zIndex:10, boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
            <div>
              <label style={{fontSize:'11px', fontWeight:'bold'}}>Mata Pelajaran</label>
              <select value={mapel} onChange={e=>setMapel(e.target.value)} style={{width:'100%', padding:'10px', borderRadius:'8px', border:'1px solid #e2e8f0'}}>
                <option>Matematika</option><option>Fisika</option><option>Kimia</option><option>Biologi</option><option>Bahasa Indonesia</option><option>Sejarah</option>
              </select>
            </div>
            <div>
              <label style={{fontSize:'11px', fontWeight:'bold'}}>Kelas</label>
              <select value={kelas} onChange={e=>setKelas(e.target.value)} style={{width:'100%', padding:'10px', borderRadius:'8px', border:'1px solid #e2e8f0'}}>
                <option>10</option><option>11</option><option>12</option>
              </select>
            </div>
            <div>
              <label style={{fontSize:'11px', fontWeight:'bold'}}>Jumlah Soal</label>
              <input type="number" value={jumlah} onChange={e=>setJumlah(parseInt(e.target.value))} style={{width:'100%', padding:'10px', borderRadius:'8px', border:'1px solid #e2e8f0'}} />
            </div>
          </div>
          <button onClick={generateSoal} disabled={loading} style={{marginTop:'12px', width:'100%', background: loading ? '#94a3b8' : '#7c3aed', color:'white', padding:'12px', borderRadius:'10px', border:'none', fontWeight:'bold', cursor:'pointer'}}>
            {loading ? '⏳ AI SEDANG MIKIR...' : '✨ GENERATE SOAL PAKAI AI'}
          </button>
        </div>

        {soal.length > 0 && (
          <div style={{marginTop:'20px', background:'white', padding:'16px', borderRadius:'12px'}}>
            <h3 style={{fontWeight:'bold', marginBottom:'12px'}}>📋 Hasil Generate ({soal.length} Soal) - Scroll ke bawah</h3>
            {soal.map((s, i) => (
              <div key={i} style={{padding:'12px', background:'#f8fafc', borderRadius:'8px', marginBottom:'8px', border:'1px solid #f1f5f9', fontSize:'14px'}}>{s}</div>
            ))}
            <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} style={{marginTop:'12px', width:'100%', background:'#0f172a', color:'white', padding:'10px', borderRadius:'8px', border:'none'}}>⬆️ Kembali ke Atas</button>
          </div>
        )}

        <a href="/dashboard" style={{display:'block', marginTop:'24px', textAlign:'center', color:'#64748b', textDecoration:'none'}}>← Kembali ke Dashboard</a>
      </div>
    </div>
  )
}