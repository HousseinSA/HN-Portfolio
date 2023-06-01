import {HeaderAnimate} from "../Components"
import {Animate} from "../Animate/Animate"
export const NotFound = () => {
  return (
    <Animate>
      <main>
        <div className="flex gap-2 mx-4 justify-between flex main-section ">
          <div className="place-self-center">
            <HeaderAnimate>
              <h1 className="notFound text-7xl lg:text-9xl ">404.</h1>
            </HeaderAnimate>
            <div className="max-w-md my-2">
              <p>
                Page not found.sorry the page your looking for does not exits.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
