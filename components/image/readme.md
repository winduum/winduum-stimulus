# [Image](https://winduum.dev/docs/components/image.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Image } from 'winduum-stimulus/components/image/index.js'

const application = Application.start()

application.register('x-image', Image)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Image } from '@/components/ui/image/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/image.html) to learn more about JavaScript API and see usage examples.
