import { Controller } from '@hotwired/stimulus'

export class Dialog extends Controller {
    async show({ params }) {
        const { showDialog } = await import('winduum/src/components/dialog/index.js')

        await showDialog(this.element, params)
    }

    async close({ params }) {
        const { closeDialog } = await import('winduum/src/components/dialog/index.js')

        await closeDialog(this.element, params)
    }
}
