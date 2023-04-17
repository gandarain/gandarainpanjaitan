const title = "Contact"
const subtitle = "Get in touch"
const contact_title = "Discuss with me"
const message = "Write me "

const contact_info = [
  {
    key: 1,
    title: 'Email',
    id: 'gandarainpanjaitan@gmail.com',
    icon: 'bx-mail-send',
    link: `mailto:${process.env.EMAIL}`
  },
  {
    key: 2,
    title: 'Whatsapp',
    id: '+6281389608041',
    icon: 'bxl-whatsapp',
    link: `https://api.whatsapp.com/send?phone=${process.env.PHONE}&text=${process.env.TEXT}`
  },
  {
    key: 3,
    title: 'Telegram',
    id: 'gandarainpanjaitan',
    icon: 'bxl-telegram',
    link: `https://telegram.me/${process.env.TELEGRAM}`
  }
]

const contact_content = {
	title,
  subtitle,
  contact_title,
  contact_info,
  message
}

export default contact_content