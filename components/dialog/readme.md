# [Dialog](https://winduum.dev/docs/components/dialog.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Dialog } from 'winduum-stimulus/components/dialog/index.js'

const application = Application.start()

application.register('x-dialog', Dialog)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Dialog } from '@/components/ui/dialog/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/dialog.html) to learn more about JavaScript API and see usage examples.

## Actions

Controller is present directly on the `dialog` element, so you need to use [Invoke](https://github.com/winduum/winduum-stimulus/tree/main/utilities/invoke) action to invoke an action outside the controller.

### show
Show a dialog via [showDialog](https://winduum.dev/docs/components/dialog.html#showdialog) method.<br>
You can add any params from [options](https://winduum.dev/docs/components/dialog.html#showoptions) via [Invoke](https://github.com/winduum/winduum-stimulus/tree/main/utilities/invoke) params.

#### Example

```html
<body data-controller="invoke">
    <button
        class="x-button"
        data-action="invoke#controller"
        data-invoke-action="x-dialog#show"
        data-invoke-target="#dialogElement"
    >
        Show Existing Dialog
    </button>
    <dialog class="x-dialog" data-controller="x-dialog">
        <div class="x-dialog-content">
            Dialog content
        </div>
    </dialog>
</body>
```

### close
Close a dialog via [closeDialog](https://winduum.dev/docs/components/dialog.html#closedialog) method.<br>
You can add any params from [options](https://winduum.dev/docs/components/dialog.html#closeoptions) via [Invoke](https://github.com/winduum/winduum-stimulus/tree/main/utilities/invoke) params.

#### Example

```html
<body>
    <dialog class="x-dialog" data-controller="x-dialog">
        <div class="x-dialog-content">
            <button class="x-button" data-controller="x-dialog#close">
                Close dialog
            </button>
        </div>
    </dialog>
</body>
```
