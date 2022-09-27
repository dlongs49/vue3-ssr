/*
 * Author:dillonl
 * DateTime:2022/9/23 下午 9:56
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import http from 'http'
import { createRequire } from 'module';
import { createServer as createViteServer } from 'vite'
const __dirname = path.dirname(fileURLToPath(
    import.meta.url))
const require = createRequire(
    import.meta.url);
const resolve = (p) => path.resolve(__dirname, p);
const createServer = async(isProd = process.env.NODE_ENV === 'production', hmrPort) => {
    const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''
        //
        // const manifest = isProd ? require('./dist/client/ssr-manifest.json') : {}
    let app = express();
    let vite
    if (isProd) {
        app.use(require('compression')())
        app.use(
            require('serve-static')(resolve('dist/client'), {
                index: false
            })
        )
    } else {
        vite = await createViteServer()
        vite = await createViteServer({
            appType: 'custom',
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100
                },
                hmr: {
                    port: hmrPort
                }
            },
            appType: 'custom'
        })
        app.use(vite.middlewares)
    }

    app.use('*', async(req, res, next) => {
        const url = req.originalUrl
        const entryServer = `./dist/server/${require('./dist/server/manifest.json')['src/entry-server.js'].file}`
        try {
            let template, render
            if (isProd) {
                template = indexProd
                render = require(entryServer).render
            } else {
                template = fs.readFileSync(
                    resolve('index.html'),
                    'utf-8'
                )
                template = await vite.transformIndexHtml(url, template)
                render = (await vite.ssrLoadModule('./src/entry-server.js')).render
            }

            const appHtml = await render(url)

            http.get("http://expro.dillonl.com/api/v2/verse/get?offset=1&limit=10", function(request) {
                request.on('data', function(r) {
                    const html = template
                        .replace(`<!--ssr-app-->`, appHtml)
                        .replace(`<!--ssr-json-->`, r.toString())
                    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
                })
            })

        } catch (e) {
            vite && vite.ssrFixStacktrace(e)
            res.status(500).end(e.stack)
        }

    })
    app.listen(6200, () => {
        console.log("6200：服务已启动~~")
    })

}

createServer()