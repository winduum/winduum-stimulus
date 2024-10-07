# [Form](https://winduum.dev/docs/components/form.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Form } from 'winduum-stimulus/components/form/index.js'

const application = Application.start()

application.register('x-form', Form)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Form } from '@/components/ui/form/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/form.html) to learn more about JavaScript API and see usage examples.
