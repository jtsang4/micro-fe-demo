import { useEffect } from 'react'
import { HistoryType, MidwareName, register, start, use } from '@satumjs/core'
import sandboxMidware from '@satumjs/midware-sandbox'

const MICRO_APP_CONTAINER = 'micro-app-container'

register({
  name: 'child',
  history: HistoryType.BROWSER,
  entry: 'http://localhost:4173/',
  rules: { rule: '/micro-route/app', container: `#${MICRO_APP_CONTAINER}` },
  shareProps: {
    statics: {
      basename: '/micro-route',
    },
  },
})

use((sys, apps, next) => {
  sys.set(MidwareName.domChange, (appName: string, mountNode: HTMLElement) => {
    mountNode.querySelectorAll('img').forEach((el) => {
      const src = el.getAttribute('src') as string
      const { assetPublicPath } = apps.find(item => item.name === appName) as any
      const newSrc = /^(https?\:)?\/\//.test(src) ? src : `${assetPublicPath}${src.charAt(0) === '/' ? src.slice(1) : src}`
      el.setAttribute('src', newSrc)
    })
    return appName
  })
  next()
})

use(sandboxMidware) // Fix: enable sandbox

export const MicroContainer = () => {
  useEffect(() => {
    start()
  }, [])

  return (
    <div>
      <h1>This is the title of main App.</h1>
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ flexBasis: '50%', border: '1px solid #7a7374' }}>
          This is content of main App.
        </div>
        <div style={{ flexGrow: 1 }} id={MICRO_APP_CONTAINER} />
      </div>
    </div>
  )
}
