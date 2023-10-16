import { Link, Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()}&nbsp;
      <Link href="https://www.craftz.dog/" target="_blank">
        Takuya Matsuyama
      </Link>
      .&nbsp;All Rights Reserved.
    </Box>
  )
}

export default Footer
