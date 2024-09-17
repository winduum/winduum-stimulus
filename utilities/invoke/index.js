import { Controller } from '@hotwired/stimulus'

export class Invoke extends Controller {
    onBeforeInvoke() {}

    async controller({ currentTarget }) {
        const [controller, action] = currentTarget.dataset.invokeAction.split('#')

        this.onBeforeInvoke()

        this.application.getControllerForElementAndIdentifier(
            document.querySelector(currentTarget.dataset.invokeTarget ?? `.${controller}`),
            controller
        )[action](arguments[0])
    }
}
