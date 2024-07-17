import { Controller } from '@hotwired/stimulus'
import { toggleSwap } from 'winduum/src/utilities/swap/index.js'

export class Swap extends Controller {
    toggle({ currentTarget }) {
        toggleSwap(currentTarget)
    }
}
