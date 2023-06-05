import React from 'react'
import { DocsThemeConfig,useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img width={50} src='https://i.ibb.co/yShkFGZ/w5BlueT.png'></img>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      Web5 Nexus
      </span>
    </>
  ),
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
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.web5.nexus' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Web5 Nexus'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Web3 Simplified: One SDK, Endless Possibilities for Seamless Integration & User Retention'}
        />
        <link rel="icon" type="image/png" href="https://i.ibb.co/yShkFGZ/w5BlueT.png"></link>
      </>
    )
  }
}

export default config
