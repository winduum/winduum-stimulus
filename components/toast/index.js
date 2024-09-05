import { Controller } from '@hotwired/stimulus'

export class Toast extends Controller {
    static values = {
        show: Object
    }

    async connect() {
        if (this.hasShowValue) await this.show({ params: this.showValue })
    }

    async show({ params }) {
        const { showToast } = await import('winduum/src/components/toaster/index.js')

        await showToast(this.element, params)
    }

    async close({ params }) {
        const { closeToast } = await import('winduum/src/components/toaster/index.js')

        await closeToast(this.element, params)
    }
}
