import React from 'react'
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;

export default function Header() {
  return (
    <AntHeader style={{backgroundColor:'white'}}>
      پنل مدیریت
    </AntHeader>
  )
}
