import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello } from 'components/demo'

let framework: string = 'React'

ReactDOM.render(
    <Hello compiler="Typescript" framework={framework} />,
    document.getElementById('app')
)