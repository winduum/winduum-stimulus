import { Controller } from '@hotwired/stimulus'

export class Dialog extends Controller {
    static values = {
        params: Object
    }

    connect() {
        this.dispatch('connect')
    }

    async show(event) {
        const { showDialog } = await import('winduum/src/components/dialog/index.js')

        await showDialog(this.element, this.hasParamsValue ? this.paramsValue : event?.params)
    }

    async close(event) {
        const { closeDialog } = await import('winduum/src/components/dialog/index.js')

        await closeDialog(this.element, this.hasParamsValue ? this.paramsValue : event?.params)
    }
}
