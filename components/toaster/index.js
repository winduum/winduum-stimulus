import { Controller } from '@hotwired/stimulus'

export class Toaster extends Controller {
    async close(event) {
        const { closeToaster } = await import('winduum/src/components/toaster/index.js')

        await closeToaster(this.element, event?.params)
    }
}
