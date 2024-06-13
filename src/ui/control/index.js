import { Controller } from "@hotwired/stimulus"

export default class Control extends Controller {
    stepUp () {
        this.element.querySelector('input').stepUp()
        this.element.querySelector('input').dispatchEvent(new Event('change', { bubbles: true }))
    }

    stepDown () {
        this.element.querySelector('input').stepDown()
        this.element.querySelector('input').dispatchEvent(new Event('change', { bubbles: true }))
    }

    showPicker () {
        this.element.querySelector('input').showPicker()
    }
}
