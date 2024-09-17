import { Controller } from '@hotwired/stimulus'
import { dataset } from '@newlogic-digital/utils-js'

export class Popover extends Controller {
    static targets = ['action']

    static values = {
        url: String,
        appendTo: String,
        manual: Boolean
    }

    async toggle({ currentTarget, params }) {
        const { togglePopover } = await import('winduum/src/components/popover/index.js')

        this.popoverTarget = document.getElementById(currentTarget.getAttribute('popovertarget'))

        await togglePopover(currentTarget, params)
    }

    async hide() {
        if (this.actionTarget.ariaExpanded !== 'true') return

        const { hidePopover } = await import('winduum/src/components/popover/index.js')

        await hidePopover(this.actionTarget)
    }

    async dismiss({ target }) {
        if (this.actionTarget.ariaExpanded !== 'true') return

        if (!this.popoverTarget.contains(target) && !this.actionTarget.isEqualNode(target) && this.actionTarget.ariaExpanded === 'true') {
            await this.hide()
        }
    }

    actionTargetConnected() {
        ;(!this.hasManualValue || !this.manualValue) && dataset(this.actionTarget, 'action').add(
            `click->${this.identifier}#${this.actionTarget.getAttribute('popovertargetaction')}:prevent`,
            `keydown.esc@window->${this.identifier}#hide`,
            `click@window->${this.identifier}#dismiss`
        )
    }

    connect() {
        this.element.querySelector('[popovertargetaction]').setAttribute(`data-${this.identifier}-target`, 'action')
    }
}
