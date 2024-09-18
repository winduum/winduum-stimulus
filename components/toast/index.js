import { Controller } from '@hotwired/stimulus'

export class Toast extends Controller {
    static values = {
        show: String,
        params: Object
    }

    initialize() {
        if (this.hasShowValue) this.show({ params: this.paramsValue ?? {} })
    }

    async show(event) {
        const { showToast } = await import('winduum/src/components/toaster/index.js')

        await showToast(this.element, this.paramsValue ?? event?.params)
    }

    async close(event) {
        const { closeToast } = await import('winduum/src/components/toaster/index.js')

        await closeToast(this.element, this.paramsValue ?? event?.params)
    }
}
