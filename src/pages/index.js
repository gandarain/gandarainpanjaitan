import Header from "@/components/header/Header"
import Home from "@/components/home/Home"
import About from "@/components/about/About"
import Skills from "@/components/skills/Skills"

export default function Container() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}
