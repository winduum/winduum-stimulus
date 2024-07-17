import { fetchJson } from '@newlogic-digital/utils-js'

export const fetchContent = async (element, url) => {
    element.toggleAttribute('data-loading')

    const { content } = await fetchJson(url).finally(() => {
        element.removeAttribute('data-loading')
    })

    return content
}
