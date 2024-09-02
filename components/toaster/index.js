import { Controller } from '@hotwired/stimulus'

export class Toaster extends Controller {
    async close({ params }) {
        const { closeToaster } = await import('winduum/src/components/toaster/index.js')

        await closeToaster(this.element, params)
    }
}
