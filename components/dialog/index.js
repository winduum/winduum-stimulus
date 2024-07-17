import { Controller } from '@hotwired/stimulus'
import { closeDialog, showDialog } from 'winduum/src/components/dialog/index.js'

export default class Dialog extends Controller {
    async show({ params }) {
        await showDialog(this.element, params)
    }

    async close({ params }) {
        await closeDialog(this.element, params)
    }
}
