/**
 * @Author fendy
 * @CreateTime 2023/9/7 17:29
 * @Description
 */
'use client'
import { SessionProvider } from 'next-auth/react'
export default function Provider({ children, session }: { children: React.ReactNode; session: any }) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
