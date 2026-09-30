import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { mapel, kelas, topik, jumlah } = await req.json();
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    
    // Prompt pendek = mikir lebih cepet
    const prompt = `Buat ${jumlah} soal PG HOTS ${mapel} kls ${kelas} topik ${topik}. JSON ONLY: [{"pertanyaan":"...","opsi":["A. ..","B. ..","C. ..","D. .."],"kunci":"A","pembahasan":"singkat"}]`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
    });

    const text = response.text!.replace(/```json|```/g,"").trim();
    return NextResponse.json({ soal: JSON.parse(text) });
  } catch(e:any){
    return NextResponse.json({error:e.message},{status:500});
  }
}