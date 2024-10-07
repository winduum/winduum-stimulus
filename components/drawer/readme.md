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

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Drawer } from '@/components/ui/drawer/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/drawer.html) to learn more about JavaScript API and see usage examples.
