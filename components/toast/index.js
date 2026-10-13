import { Controller } from '@hotwired/stimulus'
import { closeToast, showToast } from 'winduum/src/components/toast'

export class Toast extends Controller {
  static values = {
    params: Object,
  }

  connect() {
    this.dispatch('connect')
  }

  async show(event) {
    await showToast(this.element, this.hasParamsValue ? this.paramsValue : event?.params)
  }

  async close(event) {
    await closeToast(this.element, this.hasParamsValue ? this.paramsValue : event?.params)
  }
}
