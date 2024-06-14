import { Controller } from "@hotwired/stimulus"
import { dataset, fetchJson } from "@newlogic-digital/utils-js";

export class Popover extends Controller {
    static values = {
        url: String,
        insertTo: String,
        manual: Boolean
    }

    async toggle ({ currentTarget, params }) {
        const { togglePopover } = await import('winduum/src/components/popover/index.js')
        const hasUrlValue = this.hasUrlValue && !this.popoverTarget

        if (hasUrlValue) await this.fetch({ params })

        this.popoverTarget = document.getElementById(currentTarget.getAttribute('popovertarget'))

        await togglePopover(currentTarget, params)
    }

    async hide () {
        if (this.popoverActionTarget.ariaExpanded !== 'true') return

        const { hidePopover } = await import('winduum/src/components/popover/index.js')

        await hidePopover(this.popoverActionTarget)
    }

    async dismiss ({ target }) {
        if (this.popoverActionTarget.ariaExpanded !== 'true') return

        if (!this.popoverTarget.contains(target) && !this.popoverActionTarget.isEqualNode(target) && this.popoverActionTarget.ariaExpanded === 'true') {
            await this.hide()
        }
    }

    async fetch ({ params }) {
        const loadingClasses = (params.loadingClass ?? 'loading cursor-wait').split(' ')

        this.popoverActionTarget.classList.add(...loadingClasses)

        const { content } = await fetchJson(this.urlValue)

        this.popoverActionTarget.classList.remove(...loadingClasses)

        const insertElement = !this.hasInsertToValue ? this.popoverActionTarget : document.querySelector(this.insertToValue)
        insertElement.insertAdjacentHTML(!this.hasInsertToValue ? 'afterend' : 'beforeend', content)

        this.onFetchComplete()
    }

    onFetchComplete() {}

    connect () {
        this.popoverActionTarget = this.element.querySelector('[popovertargetaction]')

        if (!this.popoverActionTarget) return

        ;(!this.hasManualValue || !this.manualValue) && dataset(this.popoverActionTarget, 'action').add(
            `click->c-popover#${this.popoverActionTarget.getAttribute('popovertargetaction')}:prevent`,
            'keydown.esc@window->c-popover#hide',
            'click@window->c-popover#dismiss'
        )
    }
}
