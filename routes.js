import {Router} from '@layer0/core/router'
import {API_CACHE_HANDLER} from "./layer0/cache";

const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR

const edgeOnly = {
  browser: false,
  edge: {maxAgeSeconds: ONE_DAY},
}

const edgeAndBrowser = {
  browser: {maxAgeSeconds: ONE_HOUR},
  edge: {maxAgeSeconds: ONE_DAY},
}

export default new Router()
  .match('/api/:path*', API_CACHE_HANDLER)
  .match('/images/:path*', API_CACHE_HANDLER)
  .match('/service-worker.js', ({serviceWorker}) => serviceWorker('build/service-worker.js'))

  .match('/static/:path*', ({serveStatic, cache}) => {
    cache(edgeAndBrowser)
    serveStatic('build/static/:path*')
  })
  .match('/:path*/:file([^\\.]+|)', ({appShell, cache}) => {
    cache(edgeOnly)
    appShell('build/index.html')
  })
  .match('/:path*', ({serveStatic, cache}) => {
    cache(edgeOnly)
    serveStatic('build/:path*')
  })

  .fallback(({serveStatic}) => serveStatic('build/index.html'))
