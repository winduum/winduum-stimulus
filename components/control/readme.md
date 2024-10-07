# [Control](https://winduum.dev/docs/components/control.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Control } from 'winduum-stimulus/components/control/index.js'

const application = Application.start()

application.register('x-control', Control)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Control } from '@/components/ui/control/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/control.html) to learn more about JavaScript API and see usage examples.