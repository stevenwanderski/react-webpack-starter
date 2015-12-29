import React from 'react'
import ReactDOM from 'react-dom'

const Hello = React.createClass({
  render() {
    return <div>Hallo there!</div>
  }
})

ReactDOM.render(<Hello />, document.getElementById('app'))