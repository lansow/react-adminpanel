import React from 'react'
import { ConfigProvider } from 'antd'
import faIR from 'antd/locale/fa_IR.js'

export default function Antdp({children}) {
  return (
    <ConfigProvider 
    direction='rtl'
    locale={faIR}
    theme={{token:{fontFamily:'vazir'}}}
    >
    {children}
    </ConfigProvider>
  )
}
