import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/theme'
import React from 'react'
import { css, Global } from '@emotion/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Sinjo</title>
      </Head>
      <CssBaseline />
      <Global
        styles={css`
          body {
            user-select: none;
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
