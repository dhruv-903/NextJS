import Footer from './components/Footer'
import Navbar from './components/Navbar'
import styles from './page.module.css'

export default async function Home() {
  const eventsData = await getEventsData()
  return (
    <>
      <body style={{backgroundColor:'black'}}>
        <Navbar />

        <main className={styles.container}>
          <h1 className={styles.headingOfPage} >Popular cities events</h1>
          <div className={styles.mainStyle} >
            {eventsData.map((event, index) => {
              index++;
              if (index === 2) {
                return (
                  <a className={styles.hrefStyle} key={event.id} href={`/routes/events/${event.id}`}>
                    <div className={styles.textContainer}>
                      <h2>{event.title}</h2>
                      <p>{event.description}</p>
                    </div>
                    <div className={styles.imageContainer}>
                      <img height={400} width={350} src={event.image} />
                    </div>
                  </a>
                )
              }
              return (
                <a className={styles.hrefStyle} key={event.id} href={`/routes/events/${event.id}`}>
                  <div className={styles.imageContainer}>
                    <img height={400} width={350} src={event.image} />
                  </div>
                  <div className={styles.textContainer}>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                  </div>
                </a>
              )

            })}
          </div>
        </main>

        <Footer />
      </body>
    </>
  )
}

async function getEventsData() {
  const data = await import('@/data/data.json');
  return data.events_categories;
}