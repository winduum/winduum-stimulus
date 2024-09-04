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
            left: this.placementValue === 'left' ? this.element.scrollWidth : this.placementValue === 'right' ? 0 : null,
            top: this.placementValue === 'top' ? this.element.scrollHeight : this.placementValue === 'bottom' ? 0 : null
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

        const [distance, direction] = {
            right: [this.element.scrollWidth, 'left'],
            bottom: [this.element.scrollHeight, 'top'],
            top: [0, 'top']
        }[this.placementValue] ?? []

        await showDrawer(this.element, distance, direction)
    }

    async close() {
        const { closeDrawer } = await import('winduum/src/components/drawer/index.js')

        const [distance, direction] = {
            right: [0, 'left'],
            bottom: [0, 'top'],
            top: [this.element.scrollHeight, 'top']
        }[this.placementValue] ?? []

        await closeDrawer(this.element, distance, direction)
    }
}
