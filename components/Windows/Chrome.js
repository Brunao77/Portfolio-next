import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export const Chrome = ({ dragConstraints }) => {
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
            Chrome
            <div className="close"></div>
          </header>
          <section>
            <Image src="/mbappe.jpg" width={40} height={40} />
            <Image src="/mbappe.jpg" width={40} height={40} />
            <Image src="/mbappe.jpg" width={40} height={40} />
            <Image src="/mbappe.jpg" width={40} height={40} />
          </section>
        </motion.div>
      </div>
      <style jsx>
        {`
          div {
            width: 640px;
          }
          header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 10px;
            color: black;
            height: 30px;
            border-radius: 10px 10px 0 0;
            font-weight: bold;
          }
          .close {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: red;
          }
          section {
            display: grid;
            background: blue;
            height: 200px;
            border-radius: 0 0 10px 10px;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}
