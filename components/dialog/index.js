import { Controller } from '@hotwired/stimulus'

export class Dialog extends Controller {
    static values = {
        show: String,
        params: Object
    }

    initialize() {
        if (this.hasShowValue) this.show({ params: this.paramsValue ?? {} })
    }

    async show(event) {
        const { showDialog } = await import('winduum/src/components/dialog/index.js')

        await showDialog(this.element, this.paramsValue ?? event?.params)
    }

    async close(event) {
        const { closeDialog } = await import('winduum/src/components/dialog/index.js')

        await closeDialog(this.element, this.paramsValue ?? event?.params)
    }
}
