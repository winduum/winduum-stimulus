import { Controller } from "@hotwired/stimulus"
import { closeDialog, showDialog } from "winduum/src/components/dialog/index.js";
import { fetchJson, getId } from "@newlogic-digital/utils-js";

const fetchContent = async ({ currentTarget, params }) => {
    const loadingClasses = (params.loadingClass ?? 'loading cursor-wait').split(' ')

    currentTarget.classList.add(...loadingClasses)
    const { content } = await fetchJson(params.url)
    currentTarget.classList.remove(...loadingClasses)

    return content
}

export default class Dialog extends Controller {
    async fetch (event) {
        const content = await fetchContent(event)
        const dialog = new DOMParser().parseFromString(content, 'text/html').body.firstChild
        dialog.id = dialog.id ?? getId()

        document.documentElement.append(dialog)

        return dialog
    }

    async show ({ params }) {
        const dialogElement = !params.url ? document.getElementById(params.target) : await this.fetch()

        await showDialog(dialogElement, { remove: params.url, ...params })
    }

    async close ({ currentTarget, params }) {
        await closeDialog(document.getElementById(params?.target) ?? currentTarget.closest('dialog'), params)
    }
}
