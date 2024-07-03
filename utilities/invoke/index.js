import { Controller } from '@hotwired/stimulus'

export default class Invoke extends Controller {
    controller(event) {
        const [controller, action] = event.currentTarget.dataset.invokeAction.split('#')

        this.application.getControllerForElementAndIdentifier(
            event.currentTarget.dataset.invokeTarget ? document.querySelector(event.currentTarget.dataset.invokeTarget) : document.querySelector(`.${controller}`),
            controller
        )[action](event)
    }
}
