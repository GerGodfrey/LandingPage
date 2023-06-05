import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAiesec from '@/images/logos/a.png'
import logoItam from '@/images/logos/itam.png'
import logoDeepDive from '@/images/logos/dd.png'
import logoAnalysicNabla from '@/images/logos/an.jpg'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import img_scaling from '@/images/logos/hackatons/scaling.svg'
import img_sf from '@/images/logos/hackatons/sf.svg'
import img_mx from '@/images/logos/hackatons/mx.jpg'
import img_etherfuse from '@/images/logos/hackatons/etherfuse.jpeg'
import img_gear from '@/images/logos/hackatons/gear.png'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { useState } from 'react';

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Deep Dive',
      title: 'Data Analyst & Developer',
      logo: logoDeepDive,
      start: 'Dec, 2021',
      end: 'Sep, 2022'
    },
    {
      company: 'ITAM',
      title: 'Server Room Manager',
      logo: logoItam,
      start: 'Dec, 2019',
      end: 'Dec, 2021',
    },
    {
      company: 'Analysic Nabla',
      title: 'Data Analyst & Developer',
      logo: logoAnalysicNabla,
      start: 'Feb, 2019',
      end: 'Dec, 2019',
    },
    {
      company: 'AIESEC in Mexico',
      title: 'IT Manager',
      logo: logoAiesec,
      start: 'Dec, 2019',
      end: 'Dec, 2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="https://drive.google.com/uc?id=1GWQFM81gqhszavvgRmXTTMmepHZ6yQWi&export=download" variant="secondary" className="group mt-6 w-full" >
          Download Public CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Hacks_winner() {
  let resume = [
    {
      company: 'Ethereum Foundation Scaling',
      title: 'DOMO',
      logo: img_scaling,
      start: 'Feb, 2023'
    },
    {
      company: 'Solana Etherfuse',
      title: 'Sanwis',
      logo: img_etherfuse,
      start: 'Apr, 2023'
    },
    {
      company: 'Web 3 University Mexico',
      title: 'Decentralized Diary',
      logo: img_gear,
      start: 'Dic, 2022'
    },
    {
      company: 'Ethereum Foundation SF',
      title: 'Queb 3',
      logo: img_sf,
      start: 'Nov, 2022'
    },
    {
      company: 'Ethereum Foundation Mexico',
      title: 'Waphl',
      logo: img_mx,
      start: 'Aug, 2022'
    },
  
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Hackatons Won</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start}`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ }) {

  const [userQuestion, setUserQuestion] = useState("")
  const [botAnswer, setBotAnswer] = useState("")

  async function callAPI() {
    const text = "https://18.188.15.76/questions/}"+userQuestion
    console.log(text)
    const response = await fetch(text);
    const jsonData = await response.json();
    const res = "🤖 ggBot:  " + jsonData.Response;
    setBotAnswer(res);
  
  }

  async function query() {
    let headersList = {"Content-Type": "application/json"}
     
    let bodyContent = JSON.stringify({"question": userQuestion});
     
    let response = await fetch("https://ggbot-48h7.onrender.com/api/v1/prediction/212fad4d-c892-4965-ae98-0a90cfd89f42", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    let data = await response.text();
    data = data.substring(1, data.length - 1);
    const res = "🤖 ggBot:  " + data;
    setBotAnswer(res);
}

  return (
    <>
      <Head>
        <title>
          Ger Godfrey
        </title>
        <meta
          name="description"
          content="With over 13 years of work experience and more than 10 years of programming experience, I am always looking to contribute to a harmonious and results-driven work environment. My strong imagination and sense of humor drive me to find innovative solutions both in my personal and professional life."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Full Stack Developer
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-400 dark:text-zinc-100 sm:text-3xl">
          Blockchain | Data Analyst | Data Engineer
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Welcome to my personal page, where you will find a highly passionate individual with a strong desire to learn intriguing things. I have spent my entire life challenging myself, always reaching a goal – not necessarily the one planned, but definitely a goal. With several years of experience in the workforce, I always strive to contribute by establishing a harmonious and collaborative work environment. My great imagination allows me to find new paths in any challenge I face.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/Ger_Godfrey"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/gerardo.godfrey"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/GerGodfrey"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/godfreycasta%C3%B1eda/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className=" mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24 ">
            <Resume />
            <Hacks_winner />
          </div>
        </div>
        
        <div className='space-y-6'>
          <h2 className='px-8 py-8 mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
              Speak with my GG-Bot
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          You can engage with my personal chatbot in English or Spanish. Feel free to ask questions about my professional career, personal interests, or even my university experience. 
          </p>
            <div className='-my-4 flex justify-center space-x-5 '>
              <input type="text" id="question" value={userQuestion} onChange={e => setUserQuestion(e.target.value)} placeholder="Your question"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

              <button onClick={query} className='inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70' type="submit">Submit</button>
            </div>
          <input type="text" id="question" value={botAnswer} onChange={e => setBotAnswer(e.target.value)} placeholder= {botAnswer}
              className=" space-x-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        
      </Container>

    </>
  )
}
