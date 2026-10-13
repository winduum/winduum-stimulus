import { dataset } from '@newlogic-digital/utils-js'

export const onCommand = (event) => {
  event.preventDefault()

  const method = event.command.replace(/-\w/g, c => c[1].toUpperCase())

  if (method in event.currentTarget) event.currentTarget[method](event)
}

export function initActions(parent, selectors) {
  if (!parent) return

  selectors.forEach(([selector, action]) => {
    parent.querySelectorAll(selector).forEach((element) => {
      dataset(element, 'action').add(action)
    })
  })
}

export function initControllers(parent, selectors) {
  if (!parent) return

  selectors.forEach((selector) => {
    [...parent.getElementsByClassName(selector)].forEach((element) => {
      dataset(element, 'controller').add(selector)
    })
  })
}

export const initStimulus = (element, { controllers, actions }) => {
  initControllers(element, controllers)
  initActions(element, actions)
}

export const useController = (controller, target, application) => {
  const getController = application.getControllerForElementAndIdentifier(document.querySelector(target || `.${controller}`), controller) ?? {}

  getController.invoke = (action, event) => {
    return getController[action] ? getController[action](event ?? { params: {} }) : undefined
  }

  return getController
}

export default { onCommand, initStimulus, initActions, initControllers, useController }
