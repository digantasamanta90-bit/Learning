import { useState } from "react"
import Student from "./components/Student"
import "./App.css"

function App() {
  const [marks, setMarks] = useState([45, 30, 20, 15, 10])

  function giveGrace() {
    setMarks(
      marks.map((mark) => {
        if (mark < 25) {
          return mark + 5
        }

        return mark
      })
    )
  }

  return (
    <div className="app">
      <h1>Student Marks</h1>

      {marks.map((mark, index) => (
        <Student
          key={index}
          number={index + 1}
          marks={mark}
        />
      ))}

      <button onClick={giveGrace}>
        Give them grace
      </button>
    </div>
  )
}

export default App