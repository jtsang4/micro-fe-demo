import { HistoryType, register, start, use } from '@satumjs/core'
import {
  imageUrlCompleteMidware,
  interceptorMidware,
  mountNodeMidware,
} from '@satumjs/simple-midwares'
import microCodeMidware from '@satumjs/midware-microcode'
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

use(imageUrlCompleteMidware)
use(mountNodeMidware)
use(microCodeMidware, { simple: true, proxyLocation: true })
use(sandboxMidware) // Fix: enable sandbox
use(interceptorMidware)

start()