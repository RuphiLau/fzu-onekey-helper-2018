require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(({ action }) => {
    if (action === 'reload') {
        window.location.reload()
    }
})