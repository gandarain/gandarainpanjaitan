import Work1 from "../../public/work1.png"
import Work2 from "../../public/work2.png"
import Work3 from "../../public/work3.png"
import Work4 from "../../public/work4.jpeg"
import Work5 from "../../public/work5.png"
import Work6 from "../../public/work6.jpeg"

const title = "Portfolio"
const subtitle = "Most recent work"

const work_item = [
  {
    id: 1,
    image: Work1,
    title: 'Jenius',
    category: 'Mobile & Website Application'
  },
  {
    id: 2,
    image: Work2,
    title: 'Prixa.ai',
    category: 'Website Application'
  },
  {
    id: 3,
    image: Work3,
    title: 'Halojasa',
    category: 'Mobile & Website Application'
  },
  {
    id: 4,
    image: Work4,
    title: 'TAM Syariah',
    category: 'Mobile & Website Application'
  },
  {
    id: 5,
    image: Work5,
    title: 'Sahabat Lawyer',
    category: 'Mobile & Website Application'
  },
  {
    id: 6,
    image: Work6,
    title: 'Toko Insani',
    category: 'Mobile Application'
  }
]

const about_content = {
	title, subtitle, work_item
}

export default about_content