import { fonts } from '../../styles/theme'

export const AppLayout = ({ children, constraintsRef }) => {
  return (
    <>
      <main ref={constraintsRef}>{children}</main>
      <style jsx global>{`
        main {
          display: flex;
          width: 100%;
          height: 95vh;
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
          overflow: hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
