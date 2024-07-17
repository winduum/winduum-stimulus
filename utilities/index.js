import { fetchJson, getId } from '@newlogic-digital/utils-js'

export const fetchContent = async (element, url) => {
    element.toggleAttribute('data-loading')

    const { content } = await fetchJson(url).finally(() => {
        element.removeAttribute('data-loading')
    })

    return content
}

export const fetchElement = async (element, url, appendTo) => {
    const content = await fetchContent(element, url)
    const contentElement = new DOMParser().parseFromString(content, 'text/html').body.firstChild

    contentElement.id = contentElement.getAttribute('id') ?? getId()

    appendTo ? document.querySelector(appendTo).append(contentElement) : element.after(contentElement)

    return contentElement
}
