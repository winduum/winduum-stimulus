import { Controller } from '@hotwired/stimulus'

export class Image extends Controller {
  connect() {
    const element = this.element.querySelector('img, video, iframe')

    if (!element) return

    if (element?.complete) this.element.classList.remove('before:skeleton')
    else if (element?.oncanplay) element.oncanplay = () => this.element.classList.remove('before:skeleton')
    else if (element?.onload) element.onload = () => this.element.classList.remove('before:skeleton')
  }
}
