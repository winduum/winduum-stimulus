import { Controller } from '@hotwired/stimulus'

export class Toast extends Controller {
    static values = {
        params: Object
    }

    connect() {
        this.dispatch('connect')
    }

    async show(event) {
        const { showToast } = await import('winduum/src/components/toast/index.js')

        await showToast(this.element, this.hasParamsValue ? this.paramsValue : event?.params)
    }

    async close(event) {
        const { closeToast } = await import('winduum/src/components/toast/index.js')

        await closeToast(this.element, this.hasParamsValue ? this.paramsValue : event?.params)
    }
}
