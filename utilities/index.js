import { fetchJson } from '@newlogic-digital/utils-js'

export const fetchContent = async ({ currentTarget, params }) => {
    currentTarget.toggleAttribute('data-loading')

    const { content } = await fetchJson(params.url).finally(() => {
        currentTarget.removeAttribute('data-loading')
    })

    return content
}
