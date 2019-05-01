import React from "react"
import { Input, Segment } from "semantic-ui-react"
import "./styles.css"

class GetATodoBox extends React.Component {
  checkIfItsEnter = event => {
    if (event.key === "Enter") {
      this.props.addATodo(event.target.value)
      event.target.value = ""
    }
  }

  render() {
    return (
      <Segment>
        <Input
          fluid
          onKeyPress={this.checkIfItsEnter}
          placeholder="Type in a todo"
        />
      </Segment>
    )
  }
}

export default GetATodoBox
