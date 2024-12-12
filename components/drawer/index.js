import { Controller } from '@hotwired/stimulus'

export class Drawer extends Controller {
    static targets = ['content']

    static values = {
        placement: {
            type: String,
            default: 'left'
        },
        dialog: {
            type: String,
            default: 'modal'
        }
    }

    async connect() {
        this.element.addEventListener('click', ({ target }) => {
            if (target.closest('.x-drawer-content') === null) {
                this.close()
            }
        })
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
        const { showDrawer, scrollInitDrawer } = await import('winduum/src/components/drawer/index.js')

        if (this.dialogValue === 'modal') {
            this.element.showModal()
        } else if (this.dialogValue === 'non-modal') {
            this.element.show()
        }

        const [distance, distanceClosed, direction] = {
            right: [this.element.scrollWidth, 0, 'left'],
            bottom: [this.element.scrollHeight, 0, 'top'],
            top: [0, this.element.scrollHeight, 'top']
        }[this.placementValue] ?? []

        await scrollInitDrawer(this.element, distanceClosed, direction)

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

    async dismiss({ target }) {
        if (!this.element.open) return

        if (!this.contentTarget.contains(target) && !this.contentTarget.isEqualNode(target)) {
            await this.close()
        }
    }
}
