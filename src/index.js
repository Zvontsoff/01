import React from "react"
import ReactDOM from "react-dom"

const messages = ["Hello React", "Hello JS", "Hello HTML/CSS"]
const Messages = () => {
  return (
    <div>
      <h1>Messages</h1>
      {messages.map((message) => (
        <p key={messages}>{message}</p>
      ))}
    </div>
  )
}

ReactDOM.render(
  <>
    <Messages title={true} />
  </>,
  document.querySelector("#root"),
)
