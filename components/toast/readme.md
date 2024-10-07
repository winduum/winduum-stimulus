# [Toast](https://winduum.dev/docs/components/toast.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Toast } from 'winduum-stimulus/components/toast/index.js'

const application = Application.start()

application.register('x-toast', Toast)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Toast } from '@/components/ui/toast/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/toast.html) to learn more about JavaScript API and see usage examples.
