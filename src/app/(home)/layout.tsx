'use client'
import React, { useState } from 'react'
import { isMobile } from '@/utils'
import SideBar from '@/app/(home)/_components/SideBar'
import Header from '@/app/(home)/_components/Header'
import { inspect } from 'util'
import styles from '@/styles/home/layout.module.scss'
import Footer from '@/app/(home)/_components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const toggleSideBar = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      <SideBar collapsed={collapsed} />
      <section className={[styles.layout, collapsed ? styles.collapsed : ''].join(' ')}>
        <Header collapsed={collapsed} toggleSideBar={toggleSideBar} />
        <main className={[styles.main].join(' ')}>{children}</main>
        <Footer />
      </section>
    </>
  )
}
