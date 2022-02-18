import { motion } from 'framer-motion'
import { useState } from 'react'

export const Window = ({ children, dragConstraints, tab, width, height }) => {
  const [canDrag, toggleCanDrag] = useState(false)
  const [isDragging, toggleIsDragging] = useState(false)

  function handleDragHandleEnter() {
    toggleCanDrag(true)
  }

  function handleDragHandleLeave() {
    if (!isDragging) {
      toggleCanDrag(false)
    }
  }

  function handleDragHandleDown() {
    toggleIsDragging(true)
  }

  function handleDragHandleUp() {
    toggleIsDragging(false)
  }
  return (
    <>
      <div>
        <motion.div
          animate={{ scale: 1 }}
          drag={canDrag}
          dragConstraints={dragConstraints}
          dragElastic={false}
          dragMomentum={false}
          exit={{ scale: 0 }}
          initial={{ scale: 0 }}
        >
          <header
            onPointerDown={handleDragHandleDown}
            onPointerEnter={handleDragHandleEnter}
            onPointerLeave={handleDragHandleLeave}
            onPointerUp={handleDragHandleUp}
          >
            <p>{tab}</p>
            <div className="container-dots">
              <div className="minimize"></div>
              <div className="maximize"></div>
              <div className="close"></div>
            </div>
          </header>
          <section>{children}</section>
        </motion.div>
      </div>
      <style jsx>
        {`
          div {
            width: ${width};
            user-select: none;
          }
          p {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #1c343e;
            height: 100%;
            width: 100px;
            border-bottom: none;
            border-radius: 10px 10px 0 0;
            text-align: center;
            margin: 0;
            background: #1c343e;
            color: white;
            padding-top: 2px;
            font-weight: 100;
          }
          header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: #16272e;
            padding: 2px 20px 0 0px;
            color: black;
            height: 40px;
            border-radius: 10px 10px 0 0;
            font-weight: bold;
          }
          .container-dots {
            display: flex;
            gap: 4px;
            flex-direction: row;
            width: 50px;
          }
          .minimize {
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: rgb(255, 239, 136, 0.3);
          }
          .maximize {
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: rgb(144, 196, 97, 0.3);
          }
          .close {
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: red;
          }
          section {
            background: #42515a;
            padding: 20px;
            height: ${height};
            border-radius: 0 0 10px 10px;

            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}
