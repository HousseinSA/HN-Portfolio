import {Link} from "react-router-dom"
import {Animate} from "../Animate/Animate"
import {HeaderAnimate} from "../Components"
export const Contact = () => {
  return (
    <Animate>
      <main>
        <div className="gap-2 mx-4 min-h-H75 justify-between flex main-section ">
          <div className="place-self-center">
            <HeaderAnimate>
              <h1 className=" nav_link text-6xl md:text-7xl lg:text-8xl">
                Connect
              </h1>
            </HeaderAnimate>
            <div className="max-w-md my-2 text-sm md:text-base">
              <p>
              I'm available to tackle your project with precision
                and expertise, delivering exceptional results that exceed
                expectations.
              </p>
              <span className="underline hover:line-through text-mainColor inline-block my-2  mr-2">
                <Link to={"mailto:nejihoussein1@gmail.com"}>Mail me</Link>
              </span>
              <span className="underline hover:line-through text-mainColor inline-block my-2  mr-2">
                <Link to={"https://linkden.com/in/housseinsa"}>LinkedIn</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
