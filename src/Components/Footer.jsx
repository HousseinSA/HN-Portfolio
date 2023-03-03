import React from "react"

export default function Footer() {
  const dateYear = new Date().getFullYear()
  return (
    <div className="footer">
      <h4>Personal Website All right reserved.</h4>
      <span> &copy; {dateYear}</span>
    </div>
  )
}
