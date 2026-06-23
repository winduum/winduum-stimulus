import { Controller } from '@hotwired/stimulus'

export class Image extends Controller {
  connect() {
    const element = this.element.querySelector('img, video, iframe')

    if (!element) return

    const removeSkeleton = () => this.element.classList.remove('before:skeleton')

    if (element.complete) removeSkeleton()
    else if (element instanceof HTMLVideoElement) element.oncanplay = removeSkeleton
    else element.onload = removeSkeleton
  }
}
