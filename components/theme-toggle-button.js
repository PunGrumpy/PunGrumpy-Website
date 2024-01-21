import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const isLight = colorMode === 'light'
  const themeMode = useColorModeValue('light', 'dark')
  const colorScheme = useColorModeValue('purple', 'orange')
  const Icon = isLight ? <SunIcon /> : <MoonIcon />

  const iconAnimation = isLight
    ? {
        scale: [1, 1.5, 1],
        rotate: [0, 360, 0],
        color: ['#FFFFFF', '#FBD38D', '#FFFFFF']
      }
    : {
        scale: [1, 1.5, 1],
        rotate: [0, -360, 0],
        color: ['#000000', '#805AD5', '#000000']
      }

  const buttonVariants = {
    initial: { y: -20, opacity: 0, scale: 0.8 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 20, opacity: 0, scale: 0.8 },
    focus: { scale: 1.1 }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={themeMode}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        whileFocus="focus"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={colorScheme}
          icon={
            <motion.div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              animate={iconAnimation}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              {Icon}
            </motion.div>
          }
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
