import { Controller } from '@hotwired/stimulus'

export class Details extends Controller {
    async show({ currentTarget, params }) {
        const { showDetails } = await import('winduum/src/components/details/index.js')

        await showDetails(currentTarget, params)
    }

    async close({ currentTarget, params }) {
        const { closeDetails } = await import('winduum/src/components/details/index.js')

        await closeDetails(currentTarget, params)
    }

    async toggle({ currentTarget, params }) {
        const { toggleDetails } = await import('winduum/src/components/details/index.js')

        await toggleDetails(currentTarget, params)
    }
}
