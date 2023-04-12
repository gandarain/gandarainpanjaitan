import Header from "@/components/header/Header"
import Home from "@/components/home/Home"
import About from "@/components/about/About"

export default function Container() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}
