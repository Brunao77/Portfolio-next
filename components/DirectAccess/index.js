import Image from 'next/image'

export const DirectAccess = ({ img, title, handleOpen, onOpen }) => {
  return (
    <>
      <section
        tabIndex={0}
        onDoubleClick={() => handleOpen(onOpen)}
        onKeyDown={(e) =>
          ['Enter', 'Space'].includes(e.code) && handleOpen(onOpen)
        }
      >
        <Image src={img} width={80} height={80} />
        <h3>{title}</h3>
      </section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 150px;
            height: 150px;
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
            font-size: 25px;
            text-align: center;
            margin: 5px;
          }
        `}
      </style>
    </>
  )
}
