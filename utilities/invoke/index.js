import { Controller } from '@hotwired/stimulus'
import { fetchElement } from '../index.js'

export class Invoke extends Controller {
    onFetchComplete() {}

    async controller({ currentTarget }) {
        const [controller, action] = currentTarget.dataset.invokeAction.split('#')

        if (currentTarget.dataset.invokeUrl && !document.querySelector(currentTarget.dataset.invokeTarget)) {
            const fetchedElement = await fetchElement(
                currentTarget,
                currentTarget.dataset.invokeUrl,
                currentTarget.dataset.invokeAppendTo
            )

            this.onFetchComplete()

            currentTarget.dataset.invokeTarget = `#${fetchedElement.id}`
        }

        this.application.getControllerForElementAndIdentifier(
            document.querySelector(currentTarget.dataset.invokeTarget ?? `.${controller}`),
            controller
        )[action](arguments[0])
    }
}
