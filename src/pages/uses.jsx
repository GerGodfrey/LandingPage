import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>RoadMap - Spencer Sharp</title>
        <meta
          name="description"
          content="I share with you just a little bit of my professional life."
        />
      </Head>
      <SimpleLayout
        title="I share with you just a little bit of my professional life."
        intro="In each position and experience, there are people from whom I have learned the most, and I always remember them with great affection, since I can learn a programming language on a web page, but a lot of knowledge is lost there."
      >
        <div className="space-y-20">
          <ToolsSection title="PROFESSIONAL EXPERIENCE">
            <Tool title="Data Analyst & Developer in Deep Dive - Mexico City"> 
            Increased the success rate of an official identification OCR system.
            Improved a financial trading reporting system by enhancing speed and file size.
            Championed growth and development in Blockchain technology.
            </Tool>
            <Tool title="Server Room Manager in ITAM - Mexico City">
            Successfully executed a 100% pandemic emergency plan, which included computer equipment
            upgrades and advising faculty, students, and administrative staff.
            Developed tools to increase response speed to student inquiries.
            </Tool>
            <Tool title="Data Analyst & Developer in Analysic Nabla - Mexico City">
            Launched a version mobile application (Android and iOS) for real-time evaluations of real estate.
            Extracted texts to feed a Mexican inflation prediction model, resulting in a 10% increase in accuracy.
            Explored libraries and created more dynamic dashboards.
            </Tool>

          </ToolsSection>

          <ToolsSection title="WORKING EXPERIENCE">
            <Tool title="IT Manager AIESEC in Mexico">
            </Tool>
            <Tool title="Web Developer in CIAJ">
            </Tool>
            <Tool title="AIESEC AT ITAM">
            </Tool>
            <Tool title="Iusacell Project Leader">
            </Tool>
          </ToolsSection>

          <ToolsSection title="PROGRAMMING LANGUAGES">
            <Tool title="Python">
              Tensor, PyTorch,Numpy, Streamlit, Pandas.
            </Tool>
            <Tool title="JavaScript">
              React, Next, D3, Node, ethers, web3.
            </Tool>
            <Tool title="Solidity">
              Hardhat, Wagmi, OpenZeppelin, Infura.
            </Tool>
            <Tool title="Others">
              Rust, SQL, Dart, Java, CSS, HTML, AWS, Firebase
            </Tool>
          </ToolsSection>

          <ToolsSection title="EDUCATION">
            <Tool title="Computer Engineering - Specialty Area Business Systems">
              INSTITUTO TECNOLÓGICO AUTÓNOMO DE MÉXICO (ITAM)
            </Tool>
            <Tool title="Computer Technician">
              PLANTEL FUNDACIÓN AZTECA
            </Tool>
          </ToolsSection>

          <ToolsSection title="PROFESSIONAL SKILL">
            <Tool title="Adaptability">
            </Tool>
            <Tool title="Attetion to detail">
            </Tool>
            <Tool title="Analytical and problem solving">
            </Tool>
            <Tool title="Technical Proficiency">
            </Tool>
          </ToolsSection>

        </div>
      </SimpleLayout>
    </>
  )
}
