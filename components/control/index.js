import { Controller } from '@hotwired/stimulus'
import { dispatchEvent } from '@newlogic-digital/utils-js'

export default class Control extends Controller {
    stepUp() {
        this.element.querySelector('input').stepUp()
        dispatchEvent(this.element.querySelector('input'))
    }

    stepDown() {
        this.element.querySelector('input').stepDown()
        dispatchEvent(this.element.querySelector('input'))
    }

    showPicker() {
        this.element.querySelector('input').showPicker()
    }
}
