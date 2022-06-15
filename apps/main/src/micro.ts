import { HistoryType, fakeTagName, register, start, use } from '@satumjs/core'
import {
  imageUrlCompleteMidware,
  interceptorMidware,
  mountNodeMidware,
  simpleCssScopeMidware,
} from '@satumjs/simple-midwares'
import microCodeMidware from '@satumjs/midware-microcode'
import sandboxMidware from '@satumjs/midware-sandbox'

export const MICRO_APP_CONTAINER = 'micro-app-container'

register({
  name: 'child',
  history: HistoryType.BROWSER,
  entry: 'http://localhost:4173/',
  rules: { rule: /\/micro-route/, container: `#${MICRO_APP_CONTAINER}` },
  shareProps: {
    statics: {
      basename: '/micro-route',
    },
  },
})

use(simpleCssScopeMidware, { getScopeRule: () => fakeTagName })
use(imageUrlCompleteMidware)
use(mountNodeMidware)
use(microCodeMidware, { simple: true, proxyLocation: true })
use(sandboxMidware)
use(interceptorMidware)

start()
