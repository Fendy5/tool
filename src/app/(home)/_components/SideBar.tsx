'use client'
import { IconFont, isMobile } from '@/utils'
import { ReactElement, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from '@/styles/home/layout.module.scss'
import { Menu } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { FieldStringOutlined, PictureOutlined } from '@ant-design/icons'
import { routes } from '@/app/(home)/_config/routes'

export default function SideBar({ collapsed }: { collapsed: boolean }) {
  const currentPath = usePathname()

  return (
    <aside className={[styles.sideBar, collapsed ? styles.collapsed : ''].join(' ')}>
      <Link className={'inline-block w-full my-4'} href={'/'}>
        <Image className={'mx-auto'} width={118} height={25} src={'/images/logo.png'} alt={''} />
      </Link>
      <ul className={styles.menu}>
        {routes.map((i) => {
          return (
            <Link key={i.path} href={i.path}>
              <li className={i.path === currentPath ? styles.selected : undefined}>
                {i.getIcon()}
                <span>{i.title}</span>
              </li>
            </Link>
          )
        })}
      </ul>
    </aside>
  )
}
