import { Controller } from '@hotwired/stimulus'

export class Drawer extends Controller {
    static values = {
        placement: {
            type: String,
            default: 'left'
        }
    }

    connect() {
        const placement = {
            left: /left/.test(this.placementValue) ? this.element.scrollWidth : /right/.test(this.placementValue) ? 0 : null,
            top: /top/.test(this.placementValue) ? this.element.scrollHeight : /bottom/.test(this.placementValue) ? 0 : null
        }

        this.element.scroll({ ...placement, behavior: 'instant' })
        this.element.classList.remove('invisible')
    }

    async scroll({ target }) {
        const { scrollDrawer } = await import('winduum/src/components/drawer/index.js')

        const bottomTop = {
            snapClass: 'snap-y snap-mandatory',
            scrollSize: target.scrollHeight - target.clientHeight,
            scrollDirection: target.scrollTop
        }

        const rightBottom = {
            scrollClose: 0,
            opacityRatio: 0
        }

        const placement = {
            right: {
                ...rightBottom,
                scrollOpen: target.scrollWidth - target.clientWidth
            },
            bottom: {
                ...rightBottom,
                ...bottomTop,
                scrollOpen: target.scrollHeight - target.clientHeight
            },
            top: {
                ...bottomTop,
                scrollOpen: 0,
                scrollClose: target.scrollHeight - target.clientHeight
            }
        }

        await scrollDrawer(target, placement[this.placementValue])
    }

    async show() {
        const { showDrawer } = await import('winduum/src/components/drawer/index.js')

        const placement = {
            right: [this.element.scrollWidth],
            bottom: [this.element.scrollHeight, 'top'],
            top: [0, 'top']
        }

        await showDrawer(this.element, placement[this.placementValue][0], placement[this.placementValue][1])
    }

    async close() {
        const { closeDrawer } = await import('winduum/src/components/drawer/index.js')

        const placement = {
            right: [0],
            bottom: [0, 'top'],
            top: [this.element.scrollHeight, 'top']
        }

        await closeDrawer(this.element, placement[this.placementValue][0], placement[this.placementValue][1])
    }
}
