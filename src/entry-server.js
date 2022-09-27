/*
 * Author:dillonl
 * DateTime:2022/9/24 上午 12:15
 */
import { renderToString } from 'vue/server-renderer'
import { createApp } from './main.js'
export async function render(url) {
    const { vm, router } = createApp()
    router.push(url)
    await router.isReady()

    const ctx = {}
    const html = await renderToString(vm, ctx)
        // const preloadLinks = ctx.modules ? renderPreloadLinks(ctx.modules, manifest) : [];
        // return [html,preloadLinks]
    return html
}