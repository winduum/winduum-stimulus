# [Button](https://winduum.dev/docs/components/button.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Button } from 'winduum-stimulus/components/button/index.js'

const application = Application.start()

application.register('x-button', Button)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Button } from '@/components/ui/button/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/button.html) to learn more and see usage examples.
