import { fonts } from '../../styles/theme'

export const AppLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <style jsx global>{`
        main {
          display: flex;
          height: 100vh;
          flex-direction: row;
          padding: 20px;
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
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
