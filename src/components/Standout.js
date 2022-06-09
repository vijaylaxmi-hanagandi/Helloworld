import standOutMobile from "../images/mobile/image-stand-out.jpg"
import standOutDesktop from "../images/desktop/image-stand-out.jpg"

const StandOut = () => {
  return (
    <>
      <section className="lg:flex items-center 2xl:max-w-7xl 2xl:mx-auto">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={standOutDesktop} />
            <img src={standOutMobile} alt="" className="w-full" />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-20 lg:ml-5">
          <h2 className="text-2xl my-5 lg:text-4xl">
            Stand out to the right audience
          </h2>
          <p className="mb-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="btn-standout">Learn More</button>
        </div>
      </section>
    </>
  )
}

export default StandOut