import { useState } from 'react'
import Link from 'next/link'

export const Project = ({ img, title, repo, web }) => {
  const [isHover, setIsHover] = useState(false)
  const handleOver = () => {
    setIsHover(true)
  }
  const handleLeave = () => {
    setIsHover(false)
  }
  return (
    <>
      <div
        className="container"
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
      >
        {isHover && (
          <div className="hover">
            <div className="about-project">
              <h1>{title}</h1>
              <section>
                <Link href={repo}>
                  <a target="_blank">Repositorio</a>
                </Link>
                <Link href={web}>
                  <a target="_blank">Sitio Web</a>
                </Link>
              </section>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container {
            background-image: url(${img});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            position: relative;
          }
          .hover {
            position: absolute;
            background: rgb(62, 62, 62, 0.9);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            animation: bgColor 1.5s;
          }
          @keyframes bgColor {
            from {
              background-color: rgb(62, 62, 62, 0);
            }
            to {
              background-color: rgb(62, 62, 62, 0.9);
            }
          }
          .about-project {
            animation: opacityAnim 1s;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          @keyframes opacityAnim {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          section {
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
          a {
            background: rgb(216, 100, 95);
            color: #fff;
            border-radius: 20px;
            text-decoration: none;
            padding: 10px;
          }
        `}
      </style>
    </>
  )
}
