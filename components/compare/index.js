import { Controller } from '@hotwired/stimulus'

export class Compare extends Controller {
    async setPosition({ currentTarget }) {
        const { setPosition } = await import('winduum/src/components/compare/index.js')

        setPosition(currentTarget, arguments[0]?.params)
    }

    async setKeyboardStep({ key, currentTarget }) {
        const { setKeyboardStep } = await import('winduum/src/components/compare/index.js')

        setKeyboardStep(currentTarget, key, arguments[0]?.params?.step)
    }

    async setMouseStep({ currentTarget }) {
        const { setMouseStep } = await import('winduum/src/components/compare/index.js')

        setMouseStep(currentTarget, arguments[0]?.params?.step)
    }
}
