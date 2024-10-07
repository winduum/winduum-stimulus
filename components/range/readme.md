# [Range](https://winduum.dev/docs/components/range.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Range } from 'winduum-stimulus/components/range/index.js'

const application = Application.start()

application.register('x-range', Range)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Range } from '@/components/ui/range/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/range.html) to learn more about JavaScript API and see usage examples.
