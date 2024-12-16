import { Controller } from '@hotwired/stimulus'
import { fetchElement } from '@newlogic-digital/utils-js'

export class Invoke extends Controller {
    async action({ currentTarget }) {
        const [controller, action] = currentTarget.dataset.invokeAction.split('#')

        this.application.getControllerForElementAndIdentifier(
            document.querySelector(currentTarget.dataset.invokeTarget ?? `.${controller}`),
            controller
        )[action](arguments[0])
    }
}

export class InvokeFetch extends Invoke {
    async action({ currentTarget }) {
        if (currentTarget.dataset.invokeUrl && !document.querySelector(currentTarget.dataset.invokeTarget)) {
            const fetchedElement = await fetchElement(
                currentTarget,
                currentTarget.dataset.invokeUrl,
                currentTarget.dataset.invokeAppendTo
            )

            this.onFetchComplete(fetchedElement)

            currentTarget.dataset.invokeTarget = `#${fetchedElement.id}`
        }

        await super.action(arguments[0])
    }

    onFetchComplete(element) {}
}
