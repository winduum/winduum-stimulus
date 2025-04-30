# [Carousel](https://winduum.dev/docs/components/carousel.html)

## Installation
```shell
npm i winduum-stimulus
```

```js
import { Application } from '@hotwired/stimulus'
import { Carousel } from 'winduum-stimulus/components/carousel/index.js'

const application = Application.start()

application.register('x-carousel', Carousel)
```

### Local imports
By default, imports are directly from `npm` so you can leverage updates.
Alternatively, you can also copy and paste the code from this directory to your project and remap the imports to local.

```js
import { Carousel } from '@/components/ui/carousel/index.js'
```

### Docs
Visit [docs](https://winduum.dev/docs/components/carousel.html) to learn more about JavaScript API and see usage examples.
