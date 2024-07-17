import { Controller } from '@hotwired/stimulus'
import { dataset } from '@newlogic-digital/utils-js'
import { fetchElement } from '../../utilities/index.js'

export class Popover extends Controller {
    static values = {
        url: String,
        appendTo: String,
        manual: Boolean
    }

    async toggle({ currentTarget, params }) {
        const { togglePopover } = await import('winduum/src/components/popover/index.js')
        const hasUrlValue = this.hasUrlValue && !this.popoverTarget

        if (hasUrlValue) await this.fetch({ currentTarget })

        this.popoverTarget = document.getElementById(currentTarget.getAttribute('popovertarget'))

        await togglePopover(currentTarget, params)
    }

    // TODO show method

    async hide() {
        if (this.popoverActionTarget.ariaExpanded !== 'true') return

        const { hidePopover } = await import('winduum/src/components/popover/index.js')

        await hidePopover(this.popoverActionTarget)
    }

    async dismiss({ target }) {
        if (this.popoverActionTarget.ariaExpanded !== 'true') return

        if (!this.popoverTarget.contains(target) && !this.popoverActionTarget.isEqualNode(target) && this.popoverActionTarget.ariaExpanded === 'true') {
            await this.hide()
        }
    }

    async fetch({ currentTarget }) {
        const fetchedElement = await fetchElement(
            currentTarget,
            this.urlValue,
            this.appendToValue
        )

        if (!currentTarget.getAttribute('popovertarget')) {
            currentTarget.setAttribute('popovertarget', fetchedElement.id)
        }

        this.onFetchComplete()
    }

    onFetchComplete() {}

    connect() {
        this.popoverActionTarget = this.element.querySelector('[popovertargetaction]')

        if (!this.popoverActionTarget) return

        ;(!this.hasManualValue || !this.manualValue) && dataset(this.popoverActionTarget, 'action').add(
            `click->${this.identifier}#${this.popoverActionTarget.getAttribute('popovertargetaction')}:prevent`,
            `keydown.esc@window->${this.identifier}#hide`,
            `click@window->${this.identifier}#dismiss`
        )
    }
}
