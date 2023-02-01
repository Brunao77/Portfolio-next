import { motion } from 'framer-motion'
import { useState } from 'react'
import { colors } from '../../styles/theme'

export const Window = ({
  children,
  dragConstraints,
  tab,
  width,
  height,
  handleClose
}) => {
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
              <span className="minimize"></span>
              <span className="maximize"></span>
              <span
                className="close"
                tabIndex={0}
                onClick={handleClose}
                onKeyDown={(e) =>
                  ['Enter', 'Space'].includes(e.code) && handleClose()
                }
              ></span>
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
            font-weight: 400;
            text-align: center;
            color: ${colors.white};
          }
          header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: rgb(155, 10, 10);
            background: linear-gradient(
              90deg,
              rgba(155, 10, 10, 1) 0%,
              rgba(168, 11, 9, 1) 35%,
              rgba(166, 11, 9, 1) 100%
            );
            padding: 20px;
            height: 40px;
            border-radius: 10px 10px 0 0;
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
            background: #ebb523;
          }
          .maximize {
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: #28bc47;
          }
          .close {
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: #f25854;
            cursor: pointer;
          }
          section {
            background: rgb(1, 17, 69);
            background: linear-gradient(
              90deg,
              rgba(1, 17, 69, 1) 0%,
              rgba(15, 32, 83, 1) 35%,
              rgba(22, 90, 151, 1) 100%
            );
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
