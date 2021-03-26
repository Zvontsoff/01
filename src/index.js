import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import TodoList from "./todo.js"

const Content = () => {
  return (
    <div className="wrapper">
      <h1>Messages</h1>
      <TodoList />
    </div>
  )
}

ReactDOM.render(
  <>
    <Content />
  </>,
  document.querySelector("#root"),
)
