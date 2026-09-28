function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>

      <div className="auth-links">
        <a href="#">Login</a>
        <a href="#">SignUp</a>
      </div>
    </header>
  )
}

export default Header