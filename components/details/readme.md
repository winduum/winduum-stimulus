# [Details](https://winduum.dev/docs/components/details.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Details } from 'winduum-stimulus/components/details/index.js'

const application = Application.start()

application.register('x-details', Details)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Details } from '@/components/ui/details/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/details.html) to learn more about JavaScript API and see usage examples.
