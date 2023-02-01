import Github from '../components/icons/Github'
import Linkedin from '../components/icons/Linkedin'
import Mail from '../components/icons/Mail'
import Twitch from '../components/icons/Twitch'
import Twitter from '../components/icons/Twitter'
import { Chrome } from '../components/Apps/Chrome'
import { Aboutme } from '../components/Apps/Aboutme'
import { Contact } from '../components/Apps/Contact'

export const WINDOW_OPEN = {
  CHROME: 1,
  CONTACT: 2,
  ABOUTME: 3,
  NONE: 0
}

export const APPS = [
  {
    img: '/chrome.svg',
    title: 'Chrome',
    onOpen: WINDOW_OPEN.CHROME,
    tab: 'Projects',
    height: '450px',
    width: '680px',
    component: Chrome
  },
  {
    img: '/contact.svg',
    title: 'Contact',
    onOpen: WINDOW_OPEN.CONTACT,
    tab: 'Contact',
    height: '300px',
    width: '600px',
    component: Contact
  },
  {
    img: '/b77.png',
    title: 'About Me',
    onOpen: WINDOW_OPEN.ABOUTME,
    tab: 'About Me',
    height: '300px',
    width: '600px',
    component: Aboutme
  }
]

export const PROJECTS = [
  {
    title: 'Aerolab Challenge',
    img: '/Aerolab.PNG',
    repo: 'https://github.com/Brunao77/Aerolab-Challenge',
    web: 'https://brunao77.github.io/Aerolab-Challenge/'
  },
  {
    title: 'Higher or Lower',
    img: '/HorL.PNG',
    repo: 'https://github.com/Brunao77/Next-Higher-or-Lower-YT',
    web: 'https://higherorloweryt.vercel.app/'
  },
  {
    title: 'ML Challenge',
    img: '/ML.PNG',
    repo: 'https://github.com/Brunao77/challenge-MeLi',
    web: 'https://challengemeli.vercel.app/'
  },
  {
    title: 'Scorers',
    img: '/Scorers.png',
    repo: 'https://github.com/Brunao77/goals-hol',
    web: 'https://scorers.vercel.app/'
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
