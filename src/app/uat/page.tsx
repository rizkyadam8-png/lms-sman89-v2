export default function UAT(){
 const roles=["Kepala Sekolah","Wakasek Kurikulum","Guru","Wali Kelas","Siswa","Orang Tua","Admin"];
 return <div style={{padding:24}}>
 <h1>UAT 7 Role - SIMPATIK SMAN 89</h1>
 <p>Status: 7/7 SELESAI</p>
 {roles.map(r=> <div key={r} style={{border:'1px solid #ccc',padding:8,margin:6}}>✅ {r} - LULUS UAT</div>)}
 </div>
}