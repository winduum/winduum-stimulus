import { Controller } from '@hotwired/stimulus'
import { dataset, dispatchCustomEvent } from '@newlogic-digital/utils-js'

export class Control extends Controller {
  activeAttribute = 'data-active'

  connect() {
    this.toggleActiveAttribute()
    dataset(this.element, 'action').add(`change->${this.identifier}#toggleActiveAttribute`)
  }

  toggleActiveAttribute() {
    const telCountryCode = this.element.querySelector('[autocomplete="tel-country-code"]')

    if (telCountryCode) telCountryCode.nextElementSibling.textContent = telCountryCode.value

    this.element.toggleAttribute(this.activeAttribute, !!this.element.querySelector('input:not([type="hidden"]), textarea, select')?.value)
  }

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
