import { Controller } from '@hotwired/stimulus'

export class Tabs extends Controller {
    static targets = ['tab', 'tabpanel']

    async toggle({ currentTarget }) {
        const { toggleTab } = await import('winduum/src/components/tabs/index.js')

        toggleTab(currentTarget, {
            tabElements: this.tabTargets,
            tabPanelElements: this.tabpanelTargets
        })
    }
}
