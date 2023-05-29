import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ger Godfrey</title>
        <meta
          name="description"
          content="My name is Ger Godfrey, I am a computer engineer and a life enthusiast."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            My name is Ger Godfrey, I am a computer engineer and a life enthusiast.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Since I was 10 years old, without knowing why, I knew that I had to study computer engineering.
              That is how I embarked on the path of :Hello World: since my middle school. I took classes in C, C++, Pascal...
              but like any child, I didnt pay attention.
              </p>
              <p>
              During high school, I continued to learn about technology, computer networks, and even made a few drawings in Flash.
              I have always been careful about my decisions, so at the age of 15, I started working at a call center and creating
              my first YouTube channel.
              </p>
              <p>
              When I entered university, I left everything behind and started studying engineering...
              but ITAM would teach me things beyond programming. I learned about philosophy, contemporary issues, economics,
              seeing how people speak more than 3 languages, travel all the time... and my mind opened up like a blank notebook...
              I wanted to learn things I hadnt wanted to learn before.
              </p>
              <p>
              After some time and many diversions, it was time to enter the workforce, but I had already been working for quite some time!!
              I continued to build in AI companies, but during the pandemic, I learned about Blockchain and Web 3.0
              I learned technical and fundamental analysis, ICOs, IPOs, use of DApps, etc.
              However, it wasnt until 2022 that I started developing on this technology and fate also left me without a job.
              </p>
              <p>
                The world of Blockchain is incredibly vast, I started competing in hackathons, meeting artist and developer people.
                Time passed so quickly that I have been living as a freelancer for 7 months without realizing it, I have founded still unsuccessfully
                2 companies, learned more programming languages, and continue to meet incredible people from whom I like to learn everything!!
              </p>
              <p>
              Now I am eager to perfect my professional skills and travel the world, because in these last few months,
              I have traveled more than I had been able to do in my entire life!!!
              So remember, the attempt +1 can be THE ATTEMPT.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/Ger_Godfrey" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/gerardo.godfrey" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/GerGodfrey" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/godfreycasta%C3%B1eda/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
