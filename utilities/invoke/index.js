import { Controller } from "@hotwired/stimulus"

export default class Invoke extends Controller {
    controller (event) {
        const [controller, action] = event.params.action.split('#')

        this.application.getControllerForElementAndIdentifier(
            event.params.target ? document.querySelector(event.params.target) : document.querySelector(`.${controller}`),
            controller
        )[action](event)
    }
}
