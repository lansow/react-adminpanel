import React from 'react'
import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

export default function Footer() {
  return (
    <AntFooter style={{textAlign:'center'}}>
      <a href="http://lansow.ir" target="_blank" rel="noopener noreferrer">lansow</a>
    </AntFooter>
  )
}
