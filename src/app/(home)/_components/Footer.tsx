/**
 * @Author fendy
 * @CreateTime 2023/6/16 10:41
 * @Description
 */
import styles from '@/styles/home/layout.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      Fendy'Tools ©2022-{year} Created by{' '}
      <a target={'_blank'} href={'https://fendy5.cn'}>
        Fendy
      </a>
    </footer>
  )
}
