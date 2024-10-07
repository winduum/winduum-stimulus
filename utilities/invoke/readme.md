# Invoke

To delegate actions between controllers, you can use the global `invoke` controller. This is meant only for basic delegations, and you can delegate only one action at the time!

```html
<body data-controller="invoke"></body>
```

This way you can place action anywhere you want. To trigger an invoke action, use the `invoke#action` action. You can also use a different event type, e.g. `submit`.
```html
    <button
        data-action="click->invoke#action"
        data-invoke-action="x-dialog#show"
        data-invoke-target="#dialogElement"
    >
```

This action accepts two data attributes:
* `data-invoke-action` - Defines which controller and which action you want to invoke - `[controller-name]:[controller-action]`
* `data-invoke-target` - Defines selector with the invoked controller


## Params

Additionally, you can include [action parameters](https://stimulus.hotwired.dev/reference/actions#action-parameters). So if you want to add any param to your invoke action, you can!
* `data-invoke-[param-name]-param` - This is the format you should use for the param
