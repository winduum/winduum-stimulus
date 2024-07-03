import { Controller } from '@hotwired/stimulus'
import { closeDialog, showDialog } from 'winduum/src/components/dialog/index.js'
import { getId } from '@newlogic-digital/utils-js'
import { fetchContent } from '../../utilities/index.js'

export default class Dialog extends Controller {
    async fetch(event) {
        const content = await fetchContent(event)
        const dialog = new DOMParser().parseFromString(content, 'text/html').body.firstChild
        dialog.id = dialog.id ?? getId()

        document.documentElement.append(dialog)

        this.onFetchComplete()

        return dialog
    }

    onFetchComplete() {}

    async show({ params }) {
        const dialogElement = !params.url ? document.getElementById(params.target) : await this.fetch()

        await showDialog(dialogElement, { remove: params.url, ...params })
    }

    async close({ currentTarget, params }) {
        await closeDialog(document.getElementById(params?.target) ?? currentTarget.closest('dialog'), params)
    }
}
