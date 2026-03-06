import { Controller } from '@hotwired/stimulus'

export class Carousel extends Controller {
  static targets = ['content', 'counterMin', 'counterMax', 'pagination', 'progress', 'prev', 'next']

  async connect() {
    await this.scroll()
  }

  async scroll() {
    const { scrollCarousel } = await import('winduum/src/components/carousel/index.js')

    this.toggleScrollAttributes()

    scrollCarousel(this.contentTarget, {
      counterMinElement: this.hasCounterMinTarget && this.counterMinTarget,
      counterMaxElement: this.hasCounterMaxTarget && this.counterMaxTarget,
      progressElement: this.hasProgressTarget && this.progressTarget,
      pagination: {
        element: this.hasPaginationTarget && this.paginationTarget,
      },
    })
  }

  toggleScrollAttributes() {
    const scrollStart = this.contentTarget.scrollLeft <= 0
    const scrollEnd = this.contentTarget.scrollLeft >= this.contentTarget.scrollWidth - this.contentTarget.clientWidth
    const scrollNone = this.contentTarget.scrollWidth - this.contentTarget.clientWidth === 0

    if (this.hasPrevTarget && this.hasNextTarget) {
      this.prevTarget.disabled = scrollStart
      this.nextTarget.disabled = scrollEnd
    }

    this.element.toggleAttribute('data-scroll-start', scrollStart)
    this.element.toggleAttribute('data-scroll-end', scrollEnd)
    this.element.toggleAttribute('data-scroll-none', scrollNone)
  }

  scrollPrev() {
    this.contentTarget.scroll({ left: this.contentTarget.scrollLeft - this.contentTarget.children[0].offsetWidth })
  }

  scrollNext() {
    this.contentTarget.scroll({ left: this.contentTarget.scrollLeft + this.contentTarget.children[0].offsetWidth })
  }

  async scrollTo({ currentTarget }) {
    const { scrollTo } = await import('winduum/src/components/carousel/index.js')

    const siblingElements = [...currentTarget.parentElement.children]
    const index = siblingElements.indexOf(currentTarget)

    scrollTo(this.contentTarget, index)
  }
}
