import React, { useEffect } from 'react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

function Website({ Component, pageProps, router }) {
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={onExitComplete}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
        <SpeedInsights />
      </Layout>
    </Chakra>
  )
}

export default Website
