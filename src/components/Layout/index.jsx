import React from 'react'
import UiHeader from './UiHeader'
import UiFooter from './UiFooter'

const Layout = ({ children }) => {
  return (
    <>
      <UiHeader />
      <main>{children}</main>
      <UiFooter />
    </>
  )
}

export default Layout