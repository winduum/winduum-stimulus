import { Controller } from '@hotwired/stimulus'

export class Invoke extends Controller {
    async controller({ currentTarget }) {
        const [controller, action] = currentTarget.dataset.invokeAction.split('#')

        this.application.getControllerForElementAndIdentifier(
            document.querySelector(currentTarget.dataset.invokeTarget ?? `.${controller}`),
            controller
        )[action](arguments[0])
    }
}
