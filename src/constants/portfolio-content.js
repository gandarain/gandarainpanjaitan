import Work1 from '../../public/work1.png'
import Work2 from '../../public/work2.png'
import Work3 from '../../public/work3.png'
import Work4 from '../../public/work4.jpeg'
import Work5 from '../../public/work5.png'
import Work6 from '../../public/work6.jpeg'
import Work7 from '../../public/work7.jpg'
import Work8 from '../../public/work8.png'

const title = 'Portfolio'
const subtitle = 'Most recent work'

const portfolio_item = [
  {
    id: 1,
    image: Work7,
    title: 'CV Putra Indah Karya',
    category: 'Website Application',
    description: 'Develop landing page website application for CV Putra Indah Karya with Next JS and Reactstrap',
    info: [
      {
        id: 1,
        title: 'Initiate landing page for CV Putra Indah Karya'
      },
      {
        id: 2,
        title: 'Develop feature for landing page for CV Putra Indah Karya'
      },
      {
        id: 3,
        title: 'Deploy to github io'
      },
      {
        id: 4,
        title: 'Setup and deploy production with vercel'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://gandarain.github.io/putra_indah_karya/',
        title: 'Website'
      },
      {
        id: 2,
        icon: 'bx-link',
        link: 'https://www.putraindahkarya.com/',
        title: 'Website'
      }
    ],
    filterId: 1
  },
  {
    id: 2,
    image: Work1,
    title: 'Jenius',
    category: 'Mobile & Website Application',
    description: 'Develop Jenius mobile banking application for credit card team with React Native and Jenius admin dashboard with React Js',
    info: [
      {
        id: 1,
        title: 'Responsible to maintain the unit tests and managing to get 100% coverage'
      },
      {
        id: 2,
        title: 'Implement GraphQL service as a gateway'
      },
      {
        id: 3,
        title: 'Create and enhance Jenius ui-kit'
      },
      {
        id: 4,
        title: 'Contribute to documentation, discussion, and code review'
      },
      {
        id: 5,
        title: 'Implement push notifications with firebase'
      },
      {
        id: 6,
        title: 'Maintain and develop new features for the Jenius app, such as onboarding credit card, enrollment auto-debit, Card Verification Code, WebView, Double, Redemption, History Points, Transaction, and Installment, etc'
      },
      {
        id: 7,
        title: 'Maintain and develop Jenius Admin Dashboard'
      },
      {
        id: 8,
        title: 'Cross-collaboration with other teams to make sure the feature that we developed is working smoothly'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-apple',
        link: 'https://apps.apple.com/us/app/jenius/id1079340119',
        title: 'App Store'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=com.btpn.dc&hl=en_US',
        title: 'Google Play Store'
      }
    ],
    filterId: 1
  },
  {
    id: 3,
    image: Work2,
    title: 'Prixa.ai',
    category: 'Website Application',
    description: 'Develop website for health consultation with Vue JS and migrate Rest API to Graphql with React Apollo',
    info: [
      {
        id: 1,
        title: 'Migrate React API to Graphql with React Apollo'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://www.prixa.ai/',
        title: 'Website'
      }
    ],
    filterId: 1
  },
  {
    id: 4,
    image: Work3,
    title: 'Halojasa',
    category: 'Mobile & Website Application',
    description: 'Develop mobile application for On Demand service with React Native, start from init, setup, until the product released to App Store and Google Play Store',
    info: [
      {
        id: 1,
        title: 'Init and setup the project'
      },
      {
        id: 2,
        title: 'Create Screen and setup Navigation'
      },
      {
        id: 3,
        title: 'Handling Rest API with Axios'
      },
      {
        id: 4,
        title: 'Handling Authentication'
      },
      {
        id: 5,
        title: 'Implement Redux, Navigation, Axios Interceptor, React Hooks, Firebase Analytics, and Cloud Messaging'
      },
      {
        id: 6,
        title: 'Create an automation deployment and distribution app using Fastlane and Firebase App Distribution'
      },
      {
        id: 7,
        title: 'Create a build for Production'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-apple',
        link: 'https://apps.apple.com/id/app/halojasa/id1492671277?l=id',
        title: 'App Store'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=halo.jasa.startup&hl=en_US&gl=US',
        title: 'Google Play Store'
      },
      {
        id: 3,
        icon: 'bx-link',
        link: 'https://halojasa.com/',
        title: 'Website'
      }
    ],
    filterId: 1
  },
  {
    id: 5,
    image: Work4,
    title: 'TAM Syariah',
    category: 'Mobile & Website Application',
    description: 'Private Repository - Develop mobile application for Sales to register their customer with React Native and Admin Dashboard with React JS and Core UI',
    info: [
      {
        id: 1,
        title: 'Init and setup the project'
      },
      {
        id: 2,
        title: 'Create Screen and setup Navigation'
      },
      {
        id: 3,
        title: 'Handling Rest API with Axios'
      },
      {
        id: 4,
        title: 'Handling Authentication'
      },
      {
        id: 5,
        title: 'Create a build for Production'
      }
    ],
    result: [],
    filterId: 1
  },
  {
    id: 6,
    image: Work5,
    title: 'Sahabat Lawyer',
    category: 'Mobile & Website Application',
    description: 'Develop mobile application for Consultation with Lawyer with React Native and Admin Dashboard with React JS and Core UI',
    info: [
      {
        id: 1,
        title: 'Init and setup the project'
      },
      {
        id: 2,
        title: 'Create Screen and setup Navigation'
      },
      {
        id: 3,
        title: 'Handling Rest API with Axios'
      },
      {
        id: 4,
        title: 'Handling Authentication'
      },
      {
        id: 5,
        title: 'Create chat feature with voximplant and firebase'
      },
      {
        id: 6,
        title: 'Create a build for Production'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=com.sahabatlawyer&hl=in&gl=US',
        title: 'Google Play Store'
      }
    ],
    filterId: 1
  },
  {
    id: 7,
    image: Work6,
    title: 'Toko Insani',
    category: 'Mobile Application',
    description: 'Private Repository - Develop mobile application for E-Commerce Cooperative with React Native',
    info: [
      {
        id: 1,
        title: 'Init and setup the project'
      },
      {
        id: 2,
        title: 'Create Screen and setup Navigation'
      },
      {
        id: 3,
        title: 'Handling Rest API with Axios'
      },
      {
        id: 4,
        title: 'Handling Authentication'
      },
      {
        id: 5,
        title: 'Create a build for Production'
      }
    ],
    result: [],
    filterId: 1
  },
  {
    id: 8,
    image: Work8,
    title: 'Github User',
    category: 'Android Application',
    description: 'Develop android application with kotlin for get Dicoding "Belajar Fundamental Aplikasi Android" Certificate',
    info: [
      {
        id: 1,
        title: 'Develop android application with kotlin'
      },
      {
        id: 2,
        title: 'Learning how to create Activity and Fragment'
      },
      {
        id: 3,
        title: 'Design UI with XML'
      },
      {
        id: 4,
        title: 'Integrate Github API with retrofit'
      },
      {
        id: 5,
        title: 'Implement recyclerview to render list'
      },
      {
        id: 6,
        title: 'Implement basic ui testing with mockito and espresso'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-android',
        link: 'https://github.com/gandarain/github-user/releases',
        title: 'APK'
      },
      {
        id: 2,
        icon: 'bxl-github',
        link: 'https://github.com/gandarain/github-user',
        title: 'Github'
      }
    ],
    filterId: 2
  },
  {
    id: 9,
    image: Work8,
    title: 'Story App',
    category: 'Android Application',
    description: 'Develop android application with kotlin for get Dicoding "Belajar Fundamental Aplikasi Android" Certificate',
    info: [
      {
        id: 1,
        title: 'Develop android application with kotlin'
      },
      {
        id: 2,
        title: 'Implement livedata'
      },
      {
        id: 3,
        title: 'Learning how to create Activity and Fragment'
      },
      {
        id: 4,
        title: 'Design UI with XML'
      },
      {
        id: 5,
        title: 'Integrate Github API with retrofit'
      },
      {
        id: 6,
        title: 'Implement recyclerview to render list'
      },
      {
        id: 7,
        title: 'Implement basic ui testing with mockito and espresso'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-android',
        link: 'https://github.com/gandarain/Story-App/releases',
        title: 'APK'
      },
      {
        id: 2,
        icon: 'bxl-github',
        link: 'https://github.com/gandarain/Story-App',
        title: 'Github'
      }
    ],
    filterId: 2
  },
]

const portfolio_filter = [
  {
    id: 1,
    title: 'Project'
  },
  {
    id: 2,
    title: 'Learning'
  }
]

const portfolio_content = {
	title,
  subtitle,
  portfolio_item,
  portfolio_filter
}

export default portfolio_content