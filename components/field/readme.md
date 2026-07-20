# [Field](https://winduum.dev/docs/components/field.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Field } from 'winduum-stimulus/components/field/index.js'

const application = Application.start()

application.register('x-field', Field)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Field } from '@/components/ui/field/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/field.html) to learn more about JavaScript API and see usage examples.
