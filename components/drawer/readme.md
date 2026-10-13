# [Drawer](https://winduum.dev/docs/components/drawer.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Drawer } from 'winduum-stimulus/components/drawer/index.js'

const application = Application.start()

application.register('x-drawer', Drawer)
```

Open and close the Drawer with native Invoker Commands. The controller enhances `show-modal` with the Drawer scroll behavior, keeps the invoking button's `aria-expanded` state in sync and lets `request-close` preserve the swipe-style closing animation.

```html
<button command="show-modal" commandfor="drawerExample">Show drawer</button>

<dialog
    class="x-drawer"
    id="drawerExample"
    closedby="any"
    data-controller="x-drawer"
>
    <div class="x-drawer-scroller snap-x snap-mandatory">
        <nav class="x-drawer-content" data-x-drawer-target="content">
            Drawer content
            <button command="request-close" commandfor="drawerExample">Close drawer</button>
        </nav>
    </div>
</dialog>
```

Use the [`invokers-polyfill`](https://www.npmjs.com/package/invokers-polyfill) when supporting browsers without Invoker Commands.

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Drawer } from '@/components/ui/drawer/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/drawer.html) to learn more about JavaScript API and see usage examples.
