import Header from "@/components/header/Header"
import Home from "@/components/home/Home"

export default function Container() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  )
}
