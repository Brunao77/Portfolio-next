import Github from '../components/icons/Github'
import Linkedin from '../components/icons/Linkedin'
import Mail from '../components/icons/Mail'
import Twitch from '../components/icons/Twitch'
import Twitter from '../components/icons/Twitter'

export const WINDOW_OPEN = {
  CHROME: 1,
  CONTACT: 2,
  ABOUTME: 3,
  NONE: 0
}

export const APPS = [
  {
    img: '/chrome.png',
    title: 'Chrome',
    onOpen: WINDOW_OPEN.CHROME
  },
  {
    img: '/contact.png',
    title: 'Contact',
    onOpen: WINDOW_OPEN.CONTACT
  },
  {
    img: '/b77.png',
    title: 'About Me',
    onOpen: WINDOW_OPEN.ABOUTME
  }
]

export const PROJECTS = [
  {
    title: 'Aerolab Challenge',
    img: '/aerolab.PNG',
    repo: 'https://github.com/Brunao77/Aerolab-Challenge',
    web: 'https://brunao77.github.io/Aerolab-Challenge/'
  },
  {
    title: 'Higher or Lower',
    img: '/HorL.PNG',
    repo: 'https://github.com/Brunao77/Next-Higher-or-Lower-YT',
    web: ''
  },
  {
    title: 'ML Challenge',
    img: '/ML.PNG',
    repo: 'https://github.com/Brunao77/Challenge-Mercado-Libre',
    web: 'https://brunao77.github.io/Challenge-Mercado-Libre/'
  },
  {
    title: 'Adviency',
    img: '/Adviency.PNG',
    repo: 'https://github.com/Brunao77/Challenge-24Days-Christmas',
    web: 'https://uuuc3.csb.app/'
  }
]

export const CONTACTS = [
  {
    icon: Mail,
    href: 'mailto:brucolon@gmail.com'
  },
  {
    icon: Github,
    href: 'https://github.com/Brunao77'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/bruno-munne-4a161a218/'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/bruno_munne'
  },
  {
    icon: Twitch,
    href: 'https://www.twitch.tv/brunao77_'
  }
]
