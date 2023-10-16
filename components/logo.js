import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  padding: 10px;

  > img {
    transition: 200ms ease;
  }
`

const Logo = () => {
  const ghostImage = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={ghostImage} width={30} height={30} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          &nbsp;&nbsp;Noppakorn Kaewsalabnil
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
