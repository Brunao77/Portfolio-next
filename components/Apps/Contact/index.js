import { Contacts } from '../../../constants'
import { createElement } from 'react'
export const Contact = () => {
  return (
    <>
      <div>
        <h1>Brunao77</h1>
        <p>brucolon@gmail.com</p>
        <section>
          {Contacts.map((contact, index) => (
            <a
              key={index}
              target="_blank"
              href={contact.href}
              rel="noopener noreferrer"
            >
              {createElement(contact.icon, { href: contact.href })}
            </a>
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
            color: #c74385;
            user-select: text;
          }
          p {
            font-size: 20px;
            margin: 0;
            color: #708797;
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
            background: #c74385;
            border-radius: 100%;
            width: 65px;
            height: 65px;
          }
        `}
      </style>
    </>
  )
}
