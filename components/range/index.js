import { Controller } from '@hotwired/stimulus'

export class Range extends Controller {
    async setValue({ currentTarget, params }) {
        const { setValue, setOutputValue, setTrackProperty } = await import('winduum/src/components/range/index.js')

        if (!currentTarget) return

        setValue(currentTarget, {
            track: params.track ?? 'start'
        })

        setOutputValue(currentTarget, window[currentTarget.getAttribute('aria-labelledby')])

        setTrackProperty({
            element: this.element.parentElement,
            value: currentTarget.value,
            max: Number(currentTarget.max) || 100
        }, params.track ?? 'start')
    }

    async connect() {
        await this.setValue({
            currentTarget: this.element.querySelectorAll('input[type="range"]')[0],
            params: {
                track: 'start'
            }
        })

        await this.setValue({
            currentTarget: this.element.querySelectorAll('input[type="range"]')[1],
            params: {
                track: 'end'
            }
        })
    }
}
