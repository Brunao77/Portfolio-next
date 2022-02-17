import { fonts } from '../../styles/theme'
import Windows from '../icons/Windows'
import { Chrome } from '../Windows/Chrome'
import { useRef } from 'react'

export const AppLayout = ({ children }) => {
  const constraintsRef = useRef(null)
  return (
    <>
      <main ref={constraintsRef}>
        {children}
        <Chrome dragConstraints={constraintsRef}></Chrome>
      </main>
      <footer>
        <Windows />
      </footer>
      <style jsx global>{`
        main {
          display: flex;
          width: 100%;
          height: 95vh;
          flex-direction: row;
          padding: 20px;
        }
        footer {
          height: 5vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(220, 249, 255, 0.15);
        }
        html,
        body {
          background-image: url(/bg.jpg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 0;
          margin: 0;
          font-family: ${fonts.base};
          background-color: black;
          color: white;
          overflow: hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
