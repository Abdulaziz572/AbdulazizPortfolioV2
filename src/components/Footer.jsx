function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} <span>Abdulaziz</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
