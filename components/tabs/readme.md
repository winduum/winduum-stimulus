# [Tabs](https://winduum.dev/docs/components/tabs.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Tabs } from 'winduum-stimulus/components/tabs/index.js'

const application = Application.start()

application.register('x-tabs', Tabs)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Tabs } from '@/components/ui/tabs/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/tabs.html) to learn more about JavaScript API and see usage examples.
