import {Link} from "react-router-dom"
export const SideNav = ({path}) => {
  return (
    <div
      className={`absolute invisible md:visible  ${
        path ? "top-20 gap-14" : "top-7 gap-12"
      }  w-20 h-screen text-sm flex-col items-center  flex
  `}>
      <div className="hover:line-through -rotate-90 spacing ">
        {!path && <Link to={"https://github.com/housseinsa"} target="_blank">GH</Link>}
        {path && <Link to={"/"}>HOME</Link>}
      </div>
      {!path && (
        <div className="hover:line-through -rotate-90 spacing">
          <Link to={""}>LDN</Link>
        </div>
      )}
      <div className="w-0.5 h-1/2 bg-slate-800 rotate-180"></div>
    </div>
  )
}
