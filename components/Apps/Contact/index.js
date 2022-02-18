import { CONTACTS } from '../../../constants'
import { createElement } from 'react'
import Link from 'next/link'
import { colors } from '../../../styles/theme'

export const Contact = () => {
  return (
    <>
      <div>
        <h1>Brunao77</h1>
        <p>brucolon@gmail.com</p>
        <section>
          {CONTACTS.map((contact, index) => (
            <Link key={index} href={contact.href}>
              <a target="_blank">
                {createElement(contact.icon, { href: contact.href })}
              </a>
            </Link>
          ))}
        </section>
      </div>
      <style jsx>
        {`
          div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 80px;
            margin: 0;
            color: ${colors.primary};
            user-select: text;
          }
          p {
            font-size: 20px;
            margin: 0;
            color: ${colors.secondary};
            font-style: italic;
            margin-bottom: 60px;
            user-select: text;
          }
          section {
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${colors.primary};
            border-radius: 100%;
            width: 65px;
            height: 65px;
          }
        `}
      </style>
    </>
  )
}
