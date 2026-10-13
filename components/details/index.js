import { Controller } from '@hotwired/stimulus'

export class Details extends Controller {
  async toggleDetails({ currentTarget }) {
    const { toggleDetails } = await import('winduum/src/components/details/index.js')

    toggleDetails(currentTarget, arguments[0]?.params)
  }
}
