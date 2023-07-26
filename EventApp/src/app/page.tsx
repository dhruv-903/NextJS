import styles from './page.module.css'

export default async function Home() {
  const eventsData = await getEventsData()
  return (
    <>
      <header>
        <nav>
          <div className="styles.leftContainerH">

          </div>
          <div className="styles.rightContainerH">
            <a href="/">Home</a>
            <a href="/routes/about-us">About</a>
            <a href="/routes/events">Events</a>
          </div>
        </nav>
      </header>

      <main>
        <h1>Popular cities events</h1>

        {eventsData.map((event) => {
          return (
            <a key={event.id} href={`/routes/events/${event.id}`}>
              <h2>{event.title}</h2>
              <img height={400} width={350} src={event.image} />
              <p>{event.description}</p>
            </a>
          )
        })}

      </main>

      <footer>
        <div className="styles.leftContainerF">

        </div>
        <div className="styles.rightContainerF">
          <a href="">facebook</a>
          <a href="">instagram</a>
          <a href="">twitter</a>
          <a href="">youtube</a>
        </div>
      </footer>
    </>
  )
}

async function getEventsData() {
  const data = await import('@/data/data.json');
  return data.events_categories;
}