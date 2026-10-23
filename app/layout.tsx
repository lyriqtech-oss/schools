import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Schools by Lyriq | Uma escola mais conectada', description: 'Uma plataforma para conectar a rotina escolar, professores, estudantes e famílias.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
