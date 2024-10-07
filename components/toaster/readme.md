# [Toaster](https://winduum.dev/docs/components/toaster.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Toaster } from 'winduum-stimulus/components/toaster/index.js'

const application = Application.start()

application.register('x-toaster', Toaster)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Toaster } from '@/components/ui/toaster/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/toaster.html) to learn more about JavaScript API and see usage examples.
