'use client'
import map from '../images/locationsimage.png'
import styles from './page.module.css'
import Profile from '@/components/Profile'
import { Accordion,AccordionItem, AccordionSkeleton, Button, ActionableNotification, ContentSwitcher, Switch } from '@carbon/react'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.support}>
          <div className={styles.header}>
            <Sidebar />

            <Accordion className="custom-class">
              <AccordionItem title="Panel A"></AccordionItem>
              <AccordionItem title="Panel B">Panel B</AccordionItem>
              <AccordionItem title="Panel C">Panel C</AccordionItem>
            </Accordion>

            <Button kind="danger">Contact Us</Button>

            <ActionableNotification
              actionButtonLabel="Action"
              aria-label="closes notification"
              kind="error"
              onActionButtonClick={function noRefCheck(){}}
              onClose={function noRefCheck(){}}
              onCloseButtonClick={function noRefCheck(){}}
              statusIconDescription="notification"
              subtitle="Subtitle text goes here"
              title="Notification title"
            />
          </div>
          <div className={styles.switcherHolder}>
            {/* put map here */}
            <div className={styles.mapHolder}></div>
            <ContentSwitcher className={styles.switcher}
              onChange={(obj) => {
                let { index, name, text } = obj;
                // alert(`index: ${index} ||  name: ${name} || text: ${text}`);
              }}>
              <Switch name="locations" text="Our Offices" />
              <Switch name="tech-support" text="Tech Support" />
              <Switch name="contact" text="Chat Support" />
            </ContentSwitcher>
          </div>
        </div>
        
        
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>

  )
}
