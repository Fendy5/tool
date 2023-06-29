'use client'
import React, { useState } from 'react'
import { isMobile } from '@/utils'
import SideBar from '@/app/(home)/_components/SideBar'
import Header from '@/app/(home)/_components/Header'
import styles from '@/styles/home/layout.module.scss'
import Footer from '@/app/(home)/_components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(isMobile())
  const toggleSideBar = () => {
    setCollapsed(!collapsed)
  }
  const closeSideBarOnMain = () => {
    if (isMobile() && !collapsed) {
      toggleSideBar()
    }
  }
  return (
    <>
      <SideBar toggleSideBar={toggleSideBar} collapsed={collapsed} />
      <section className={[styles.layout, collapsed || isMobile() ? styles.collapsed : ''].join(' ')}>
        <Header collapsed={collapsed} toggleSideBar={toggleSideBar} />
        <main
          onClick={() => {
            closeSideBarOnMain()
          }}
          className={[styles.main].join(' ')}>
          {children}
        </main>
        <Footer />
      </section>
    </>
  )
}
