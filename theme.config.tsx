import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img width={50} src='https://i.ibb.co/yShkFGZ/w5BlueT.png'></img>,
  project: {
    link: 'https://github.com/web5nexus',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/web5nexus/docs/blob/main/',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://web5.nexus" target="_blank">
          Web5 Nexus
        </a>
        .
      </span>
    )
  },navigation: {
    prev: true,
    next: true
  },
  gitTimestamp:true,
  
}

export default config
