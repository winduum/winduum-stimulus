import { Controller } from '@hotwired/stimulus'
import { dispatchCustomEvent } from '@newlogic-digital/utils-js'

export class Control extends Controller {
    stepUp() {
        this.element.querySelector('input').stepUp()
        dispatchCustomEvent(this.element.querySelector('input'))
    }

    stepDown() {
        this.element.querySelector('input').stepDown()
        dispatchCustomEvent(this.element.querySelector('input'))
    }

    showPicker() {
        this.element.querySelector('input').showPicker()
    }
}
