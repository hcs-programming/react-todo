import React from "react"
import { Segment } from "semantic-ui-react"

import "./styles.css"

function Todo({ name, isComplete, toggle, deleteThis }) {
  return (
    <Segment
      className={isComplete ? "complete" : ""}
      inverted={isComplete}
      color={isComplete ? "teal" : null}
      onClick={toggle}
    >
      {name}
    </Segment>
  )
}

export default Todo
