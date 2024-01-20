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
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Bangkok, Thailand
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated from high school at{' '}
          <Link
            as={NextLink}
            href="http://www.sriayudhya.ac.th/"
            target="_blank"
          >
            Sriayudhya School
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Start learning programming
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Study at 1st -{' '}
          <Link as={NextLink} href="https://www.kmitl.ac.th/" target="_blank">
            King Mongkut&apos;s Institute of Technology Ladkrabang
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love
        </Heading>
        <Paragraph>
          Coding, Music,{' '}
          <Link
            as={NextLink}
            href="https://www.instagram.com/ansonseabra/"
            target="_blank"
          >
            Singer
          </Link>
          , Playing Guitar,{' '}
          <Link
            as={NextLink}
            href="https://500px.com/p/whatthepunphoto"
            target="_blank"
          >
            Photography
          </Link>
          , Custom Keyboard, Cyber security
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/PunGrumpy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @PunGrumpy
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://discordapp.com/users/353899973252874260"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                @Grumpy#9760
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/wtpp_p114/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @wtpp_p114
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/noppakorn-kaewsalabnil/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Noppakorn Kaewsalabnil
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
