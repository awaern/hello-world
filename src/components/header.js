import React from "react"
import { Link } from "gatsby"

export default function Header({ title }) {
  return (
    <header>
      <h3>{title}</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/contact/">Contact</Link></li>
      </ul>
    </header>
  )
}
