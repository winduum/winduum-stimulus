import { Controller } from '@hotwired/stimulus'
import { dataset } from '@newlogic-digital/utils-js'

export class Carousel extends Controller {
  static targets = ['content', 'markerGroup', 'marker', 'prev', 'next']

  static values = {
    vertical: Boolean,
  }

  async connect() {
    const { setSnappedAttribute, toggleScrollState } = await import('winduum/src/components/carousel/index.js')

    this.abortController = new AbortController()
    const signal = this.abortController.signal

    this.contentTarget.addEventListener('scrollsnapchanging', (event) => {
      setSnappedAttribute(this.contentTarget, event.snapTargetInline ?? event.snapTargetBlock, this.hasMarkerGroupTarget ? this.markerGroupTarget : null)
    }, { signal })

    this.contentTarget.addEventListener('scroll', () => {
      toggleScrollState(this.contentTarget, {
        prevElement: this.hasPrevTarget ? this.prevTarget : null,
        nextElement: this.hasNextTarget ? this.nextTarget : null,
        vertical: this.verticalValue,
      })
    }, { signal })
  }

  disconnect() {
    this.abortController?.abort()
  }

  markerTargetConnected(element) {
    dataset(element, 'action').add(`click->${this.identifier}#scrollToMarker:prevent`)
  }

  async scrollToMarker({ currentTarget }) {
    const { scrollToMarker } = await import('winduum/src/components/carousel/index.js')

    scrollToMarker(this.contentTarget, currentTarget, this.markerGroupTarget, this.verticalValue ? { block: 'start' } : {})
  }

  async scroll(direction) {
    const { scrollBy } = await import('winduum/src/components/carousel/index.js')

    scrollBy(this.contentTarget, {
      direction,
      vertical: this.verticalValue,
    })
  }

  scrollPrev() {
    this.scroll(-1)
  }

  scrollNext() {
    this.scroll(1)
  }
}
