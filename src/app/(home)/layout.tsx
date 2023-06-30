'use client'

import React, { useEffect, useState } from 'react'
import { useIsMobile } from '@/utils'
import SideBar from '@/app/(home)/_components/SideBar'
import Header from '@/app/(home)/_components/Header'
import styles from '@/styles/home/layout.module.scss'
import Footer from '@/app/(home)/_components/Footer'
import { ConfigProvider } from 'antd'
import theme from '@/config/antd-theme'

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  const [collapsed, setCollapsed] = useState(false)

  const toggleSideBar = () => {
    setCollapsed(!collapsed)
  }

  const closeSideBarOnMain = () => {
    if (isMobile && collapsed) {
      toggleSideBar()
    }
  }

  return (
    <ConfigProvider theme={theme}>
      <SideBar toggleSideBar={toggleSideBar} collapsed={collapsed} />
      <section className={[styles.layout, collapsed || isMobile ? styles.collapsed : ''].join(' ')}>
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
    </ConfigProvider>
  )
}
