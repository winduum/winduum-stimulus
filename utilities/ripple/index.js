import { Controller } from '@hotwired/stimulus'
import { showRipple } from 'winduum/src/utilities/ripple/index.js'

export class Ripple extends Controller {
    show(event) {
        showRipple(event)
    }
}
