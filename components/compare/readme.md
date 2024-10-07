# [Compare](https://winduum.dev/docs/components/compare.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Compare } from 'winduum-stimulus/components/compare/index.js'

const application = Application.start()

application.register('x-compare', Compare)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Compare } from '@/components/ui/compare/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/compare.html) to learn more about JavaScript API and see usage examples.
