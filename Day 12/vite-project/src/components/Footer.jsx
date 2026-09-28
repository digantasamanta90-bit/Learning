function Footer({ company, year, message }) {
  return (
    <footer className="footer">
      <p>© {year} <strong>{company}</strong></p>
      <p>{message}</p>
    </footer>
  )
}

export default Footer