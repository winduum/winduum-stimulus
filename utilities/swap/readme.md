# [Swap](https://winduum.dev/docs/utilities/swap.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Swap } from 'winduum-stimulus/utilities/swap/index.js'

const application = Application.start()

application.register('swap', Swap)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Swap } from '@/utils/ui/swap/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/utilities/swap.html) to learn more about JavaScript API and see usage examples.
