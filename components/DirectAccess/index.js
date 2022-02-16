import Image from 'next/image'

export const DirectAcces = ({ img, title }) => {
  return (
    <>
      <section tabIndex={0}>
        <Image src={img} width={60} height={60} />
        <h3>{title}</h3>
      </section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100px;
            height: 100px;
            justify-content: center;
            cursor: pointer;
            user-select: none;
            border-radius: 10px;
          }
          section:focus {
            background-color: rgba(220, 249, 255, 0.25);
          }
          section:active {
            background-color: rgba(220, 249, 255, 0.35);
          }
          h3 {
            text-align: center;
            margin: 5px;
          }
        `}
      </style>
    </>
  )
}
