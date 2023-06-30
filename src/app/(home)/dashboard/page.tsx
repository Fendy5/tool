import styles from '@/styles/home/home.module.scss'
import Link from 'next/link'
import { routes } from '@/app/(home)/_config/routes'

export const metadata = {
  title: '首页'
}
export default function Page() {
  return (
    <div className={styles.app}>
      {routes
        .filter((i, index) => index > 0)
        .map((i) => {
          return (
            <div key={i.path} className={styles.appCard}>
              {i.getIcon('48px')}
              <div className="pl-4">
                <Link prefetch={false} href={i.path} className={styles.title}>
                  {i.title}
                </Link>
                <div className={styles.desc}>{i.desc}</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
