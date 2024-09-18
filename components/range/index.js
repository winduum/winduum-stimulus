import { Controller } from '@hotwired/stimulus'

export class Range extends Controller {
    static targets = ['start', 'end']

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
            currentTarget: this.startTarget,
            params: {
                track: 'start'
            }
        })

        await this.setValue({
            currentTarget: this.endTarget,
            params: {
                track: 'end'
            }
        })
    }
}
