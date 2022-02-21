import { motion } from 'framer-motion'

import React from 'react'

export function SwipeMotion({children}) {
  return (

    <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}>
        {children}
    </motion.div>
  )
}

