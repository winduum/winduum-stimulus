# [Popover](https://winduum.dev/docs/components/popover.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Popover } from 'winduum-stimulus/components/popover/index.js'

const application = Application.start()

application.register('x-popover', Popover)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Popover } from '@/components/ui/popover/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/popover.html) to learn more about JavaScript API and see usage examples.
