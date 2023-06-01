export const Footer = () => {
  const dateYear = new Date().getFullYear()
  return (
    <div className="footer m-auto px-5 py-2 ">
      <h4>Portfolio Website All right reserved</h4>
      <span className="text-mainColor"> &copy; {dateYear}</span>
    </div>
  )
}
