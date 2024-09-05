import { Controller } from '@hotwired/stimulus'
import { validateForm, validateField } from 'winduum/src/components/form/index.js'
import { dataset } from '@newlogic-digital/utils-js'

export class Form extends Controller {
    connect() {
        this.element.noValidate = true
        dataset(this.element, 'action').add(`submit->${this.identifier}#validateForm`)
    }

    validateForm(event) {
        validateForm(event, event?.params)
    }

    validateField({ currentTarget, params }) {
        validateField(currentTarget, params)
    }
}
