import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const GhostSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
    color="teal.500"
    aria-label="Loading..."
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
  />
)

export const GhostContainer = forwardRef(({ children, ...props }, ref) => (
  <Box
    ref={ref}
    className="voxel-ghost"
    m="auto"
    mt={{ base: '-20px', md: '-60px', lg: '-120px' }}
    mb={{ base: '-40px', md: '-140px', lg: '-200px' }}
    w={{ base: 280, md: 480, lg: 640 }}
    h={{ base: 280, md: 480, lg: 640 }}
    position="relative"
    {...props}
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <GhostContainer>
      <GhostSpinner />
    </GhostContainer>
  )
}

export default Loader
