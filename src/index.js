import React from "react"
import ReactDOM from "react-dom"
import { Container, Header, Segment } from "semantic-ui-react"
import "./index.css"

import Todo from "./components/Todo"
import GetATodoBox from "./components/GetATodoBox"

class App extends React.Component {
  state = {
    todos: [["walk buzz", true]]
  }

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem("blah"))

    if (storedTodos != null) {
      this.setState({ todos: storedTodos })
    }
  }

  addTodo = todo => {
    this.state.todos.push([todo, false])

    this.setState({ todos: this.state.todos })
    localStorage.setItem("blah", JSON.stringify(this.state.todos))
  }

  deleteTodo = todo => {
    this.state.todos.splice(todo, 1)

    this.setState({ todos: this.state.todos })
  }

  changeTodoStatus = todo => {
    this.state.todos[todo][1] = !this.state.todos[todo][1]

    this.setState({ todos: this.state.todos })
    localStorage.setItem("blah", JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <Container className="App">
        <Header as="h1">Todos</Header>
        <Segment.Group stacked>
          <GetATodoBox addATodo={this.addTodo} />
          {this.state.todos.map((todo, i) => (
            <Todo
              key={i}
              name={todo[0]}
              isComplete={todo[1]}
              toggle={() => this.changeTodoStatus(i)}
              deleteThis={() => this.deleteTodo(i)}
            />
          ))}
        </Segment.Group>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
