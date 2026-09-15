import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'TeamFlow — Project Management',description:'AI-ready project management SaaS portfolio project'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
