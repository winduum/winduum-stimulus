# [Ripple](https://winduum.dev/docs/utilities/ripple.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Ripple } from 'winduum-stimulus/utilities/ripple/index.js'

const application = Application.start()

application.register('ripple', Ripple)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Ripple } from '@/utils/ui/ripple/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/utilities/ripple.html) to learn more about JavaScript API and see usage examples.
