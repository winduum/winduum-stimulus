import { Controller } from "@hotwired/stimulus"

export default class Invoke extends Controller {
    controller (event) {
        const [controller, action] = event.dataset.invokeAction.split('#')

        this.application.getControllerForElementAndIdentifier(
            event.dataset.invokeTarget ? document.querySelector(event.dataset.invokeTarget) : document.querySelector(`.${controller}`),
            controller
        )[action](event)
    }
}
