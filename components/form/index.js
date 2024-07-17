import { Controller } from '@hotwired/stimulus'
import { validateForm, validateField } from 'winduum/src/components/form/index.js'

export class Form extends Controller {
    connect() {
        this.element.noValidate = true
        this.element.addEventListener('submit', this.validateForm)
    }

    validateForm(event) {
        validateForm(event)
    }

    validateField({ currentTarget }) {
        validateField(currentTarget)
    }
}
