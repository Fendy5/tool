/**
 * @Author fendy
 * @CreateTime 2023/6/14 17:11
 * @Description
 */
import styles from '@/styles/home/layout.module.scss'
import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default function Header({ collapsed, toggleSideBar }: { collapsed: boolean; toggleSideBar: () => void }) {
  return (
    <header className={styles.header}>
      <div className={'flex items-center'}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: toggleSideBar
        })}
        <Link href={'/'} className={'pl-3'}>
          Fendy's Tool~
        </Link>
      </div>
      <div>Login</div>
    </header>
  )
}
