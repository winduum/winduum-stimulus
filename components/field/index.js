import { Controller } from '@hotwired/stimulus'
import { validateField } from 'winduum/src/components/field/index.js'
import { dataset } from '@newlogic-digital/utils-js'

export class Field extends Controller {
  connect() {
    dataset(this.element, 'action').add(`change->${this.identifier}#validateField`)
  }

  validateField({ params }) {
    validateField(this.element, params)
  }
}
