import React from "react"
import Header from './header';
import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header title="Adam Waern" />
      {children}
    </div>
  )
}