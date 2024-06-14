import { Controller } from "@hotwired/stimulus"

export default class Invoke extends Controller {
    action (event) {
        this.application.getControllerForElementAndIdentifier(
            document.getElementById(event.params.target),
            event.params.controller
        )[event.params.action](event)
    }
}
