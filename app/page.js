'use client'
// import map from '../public/images/locationsimage.png'
import styles from './page.module.css'
import Profile from '@/components/Profile'
import { Accordion,AccordionItem, AccordionSkeleton, Button, ActionableNotification, ContentSwitcher, Switch, ToastNotification } from '@carbon/react'
import Sidebar from '@/components/Sidebar'
// import honolulu from '../public/images/Honolulu.jpeg'

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
          </div>
          <div className={styles.switcherHolder}>
            <div className={styles.columnHolder}>
              <div className={styles.columnLeft}>
                <h1>Honolulu</h1>
              </div>
              <div className={styles.columnRight}>
                <h1>London</h1>
              </div>
            </div>
            {/* put map here */}
            {/* <div className={styles.mapHolder}></div> */}
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
      </div>
    </main>

  )
}
