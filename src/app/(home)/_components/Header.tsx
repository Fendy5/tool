/**
 * @Author fendy
 * @CreateTime 2023/6/14 17:11
 * @Description
 */
import styles from '@/styles/home/layout.module.scss'
import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Link from 'next/link'
// import { Dropdown, MenuProps, Space } from 'antd'
// import { useSession } from 'next-auth/react'
// import { DownOutlined, UserOutlined } from '@ant-design/icons'

export default function Header({ collapsed, toggleSideBar }: { collapsed: boolean; toggleSideBar: () => void }) {
  // const items: MenuProps['items'] = [
  //   { key: '1', label: '个人中心' },
  //   { key: '2', label: '退出', danger: true }
  // ]
  // const { data, status } = useSession()

  // const [status] = useState('authenticated')
  // const onDropdownClick = () => {}
  // const handleLogin = () => {}
  return (
    <header className={styles.header}>
      <div className={'flex items-center'}>
        <span className={'pr-3 flex'}>
          {React.createElement(collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
            onClick: toggleSideBar
          })}
        </span>
        <Link href={'/'}>Fendy's Tool~</Link>
      </div>
      {/*{status === 'authenticated' ? (*/}
      {/*  <Dropdown menu={{ items, onClick: onDropdownClick }} className={'mr-4'}>*/}
      {/*    <a className={'flex cursor-pointer'} onClick={(e) => e.preventDefault()}>*/}
      {/*      /!*<Image className="mr-2 rounded-full" width={32} height={32} src={data.user.avatar} alt={data.user.nickname} />*!/*/}
      {/*      <Space className={'ml-2'}>*/}
      {/*        /!*<span className={'text-black'}>{ data.user.nickname }</span>*!/*/}
      {/*        <DownOutlined />*/}
      {/*      </Space>*/}
      {/*    </a>*/}
      {/*  </Dropdown>*/}
      {/*) : (*/}
      {/*  <UserOutlined style={{ fontSize: '18px' }} onClick={handleLogin} />*/}
      {/*)}*/}
    </header>
  )
}
