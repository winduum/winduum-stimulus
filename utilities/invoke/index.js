import { Controller } from '@hotwired/stimulus'
import { fetchContent } from '../index.js'
import { getId } from '@newlogic-digital/utils-js'

export default class Invoke extends Controller {
    async fetch(element, url, appendTo) {
        const content = await fetchContent(element, url)
        const contentElement = new DOMParser().parseFromString(content, 'text/html').body.firstChild

        contentElement.id = contentElement.getAttribute('id') ?? getId()

        appendTo ? document.querySelector(appendTo).append(contentElement) : element.after(contentElement)

        this.onFetchComplete()

        return contentElement
    }

    onFetchComplete() {}

    async controller({ currentTarget }) {
        const [controller, action] = currentTarget.dataset.invokeAction.split('#')

        if (currentTarget.dataset.invokeUrl && !document.querySelector(currentTarget.dataset.invokeTarget)) {
            const fetchedElement = await this.fetch(
                currentTarget,
                currentTarget.dataset.invokeUrl,
                currentTarget.dataset.invokeAppendTo
            )

            currentTarget.dataset.invokeTarget = `#${fetchedElement.id}`
        }

        this.application.getControllerForElementAndIdentifier(
            document.querySelector(currentTarget.dataset.invokeTarget ?? `.${controller}`),
            controller
        )[action](arguments[0])
    }
}
