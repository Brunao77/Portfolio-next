import Link from 'next/link'
import { colors } from '../../../styles/theme'

export const Aboutme = () => {
  return (
    <>
      <div>
        <h1>Bruno Munné</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I'm Argentinean passionate about the world of technology, I'm
          currently studying Information Systems Engineering.
        </p>
        <section>
          <Link href="/Resume-Bruno Munne.pdf">
            <a target="_blank">Resume</a>
          </Link>
        </section>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            height: 100%;
          }
          h1 {
            margin: 0;
            color: ${colors.primary};
            font-size: 50px;
          }
          h2 {
            margin: 0;
            color: ${colors.secondary};
            font-weight: 400;
          }
          p {
            font-size: 20px;
          }
          a {
            background: ${colors.primary};
            padding: 10px;
            color: #fff;
            border-radius: 20px;
            text-decoration: none;
            font-size: 20px;
          }
          a:hover {
            opacity: 0.8;
          }
          a:active {
            transform: scale(97%);
          }
          section {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}
