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

  &:hover > img {
    transform: rotate(-20deg);
    transition: 300ms ease-in-out;
  }
`

const Logo = () => {
  const ghostImage = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={ghostImage} width={35} height={35} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Noppakorn Kaewsalabnil
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
