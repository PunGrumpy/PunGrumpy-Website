import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoDiscord,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import Image from 'next/image'

const bioItems = [
  {
    title: 'Born and live in',
    years: '2002',
    content: 'Bangkok, Thailand'
  },
  {
    title: 'High School Education at',
    years: '2015 to 2021',
    content: 'Sriayudhya School',
    href: 'http://www.sriayudhya.ac.th/'
  },
  {
    title: 'University Education at',
    years: '2022 to Present',
    content: "King Mongkut's Institute of Technology Ladkrabang",
    href: 'https://www.kmitl.ac.th/'
  }
]

const iLoveItems = [
  { title: 'Coding' },
  { title: 'Music', href: 'https://www.instagram.com/ansonseabra/' },
  { title: 'Playing Guitar' },
  { title: 'Photography', href: 'https://500px.com/p/whatthepunphoto' },
  { title: 'Custom Keyboard' },
  { title: 'DevOps' }
]

const socialLinks = [
  {
    href: 'https://github.com/PunGrumpy',
    label: '@PunGrumpy',
    icon: <IoLogoGithub />
  },
  {
    href: 'https://discordapp.com/users/353899973252874260',
    label: '@Grumpy#9760',
    icon: <IoLogoDiscord />
  },
  {
    href: 'https://www.instagram.com/wtpp_p114/',
    label: '@wtpp_p114',
    icon: <IoLogoInstagram />
  },
  {
    href: 'https://www.linkedin.com/in/noppakorn-kaewsalabnil/',
    label: '@Noppakorn Kaewsalabnil',
    icon: <IoLogoLinkedin />
  }
]

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a student computer science based in Thailand!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Noppakorn Kaewsalabnil
          </Heading>
          <p> Undergraduate student - Computer Science </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/grumpy.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" mb={4}>
          Bio
        </Heading>
        {bioItems.map((item, index) => (
          <BioSection key={index}>
            <BioYear>{item.years}</BioYear>
            {item.title && <span>{item.title} </span>}
            {item.href ? (
              <Link as={NextLink} href={item.href} target="_blank">
                {item.content}
              </Link>
            ) : (
              <span>{item.content}</span>
            )}
          </BioSection>
        ))}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love
        </Heading>
        <Box display="flex" flexWrap="wrap">
          {iLoveItems.map((item, index) => (
            <Box key={index} textAlign="center">
              {item.href ? (
                <Link as={NextLink} href={item.href} target="_blank">
                  <Paragraph>{item.title}</Paragraph>
                </Link>
              ) : (
                <Paragraph>{item.title}</Paragraph>
              )}
            </Box>
          ))}
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          {socialLinks.map(link => (
            <ListItem key={link.href}>
              <Link href={link.href} isExternal>
                <Button variant="ghost" colorScheme="teal" leftIcon={link.icon}>
                  {link.label}
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
