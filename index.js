import { initActions, initControllers } from '@newlogic-digital/utils-js'

export const initStimulus = (element, { controllers, actions }) => {
    initControllers(element, controllers)
    initActions(element, actions)
}

export const useController = (controller, target, application) => {
    const getController = application.getControllerForElementAndIdentifier(document.querySelector(target || `.${controller}`), controller)

    getController.invoke = (action, event) => getController[action](event)

    return getController
}

export default { initStimulus, useController }
