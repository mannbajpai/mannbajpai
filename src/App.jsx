import { Suspense, lazy } from "react"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"

const Navbar = lazy(() => import("./components/Navbar"))
const Hero = lazy(() => import("./components/Hero"))
const About = lazy(() => import("./components/About"))
const Internships = lazy(() => import("./components/Internships"))
const Projects = lazy(() => import("./components/Projects"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

const App = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-lg"></span></div>}>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Hero />
        <About />
        <Internships />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </HelmetProvider>
  )
}

export default App