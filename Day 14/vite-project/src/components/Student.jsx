function Student({ number, marks }) {
  return (
    <div className="student">
      <p>Student {number}</p>
      <p>Marks: {marks}</p>
      <p>Status: {marks >= 25 ? "Pass" : "Fail"}</p>
    </div>
  )
}

export default Student