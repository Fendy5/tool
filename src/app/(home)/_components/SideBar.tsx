'use client'
import { usePathname, useRouter } from 'next/navigation'
import styles from '@/styles/home/layout.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/app/(home)/_config/routes'
import { useIsMobile } from '@/utils'

export default function SideBar({ collapsed, toggleSideBar }: { collapsed: boolean; toggleSideBar: () => void }) {
  const currentPath = usePathname()
  const router = useRouter()
  const isMobile = useIsMobile()

  const handleSelect = (path: string) => {
    router.push(path)
    isMobile && toggleSideBar()
  }

  return (
    <aside className={[styles.sideBar, collapsed ? styles.collapsed : ''].join(' ')}>
      <Link className={'inline-block w-full my-4'} href={'/'}>
        <Image className={'mx-auto'} width={118} height={25} src={'/images/logo.png'} alt={''} />
      </Link>
      <ul className={styles.menu}>
        {routes.map((i) => {
          return (
            <ul
              key={i.path}
              onClick={() => {
                handleSelect(i.path)
              }}>
              <li className={i.path === currentPath ? styles.selected : undefined}>
                {i.getIcon()}
                <span>{i.title}</span>
              </li>
            </ul>
          )
        })}
      </ul>
    </aside>
  )
}
