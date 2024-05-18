import { Toaster } from "react-hot-toast"
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components"
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App