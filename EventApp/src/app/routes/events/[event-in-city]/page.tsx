
import Navbar from '@/app/components/Navbar';
import styles from '../../../styles/cityEvent.module.css'
import Footer from '@/app/components/Footer';

type MyString = {
  params: {
    'event-in-city': string;
  }
};

type Data = {
  id: string,
  title: string,
  city: string,
  description: string,
  image: string,
  emails_registered: []
}

const MyEvent = async (context: MyString) => {

  const id = context.params['event-in-city']; // i cau use '.' but since my name is use '-' that's
  const { allEvents } = await import('@/data/data.json');

  const data = allEvents.filter((event) => {
    return event.city.toLowerCase() === id.toLowerCase();
  });


  return (
    <>
      <Navbar />
      <h1>Events in {data[0].city}  </h1>
      <main className={styles.mainContainer} >
        {
          data.map((event: any) => {
            return (
              <a className={styles.hrefContainer} key={event.id} href={`/routes/events/${event.city}/${event.id}`}>
                <img src={event.image} height={400} width={350} alt="" />
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </a>
            )
          })
        }
      </main>
      <Footer />
    </>
  )
}
export default MyEvent;

// we have to shown here city specific data and we can fetch that data through getStaticPaths 

export async function getStaticPaths() {
  const { events_categories } = await import('@/data/data.json')
  const paths = events_categories.map((myEvent) => {
    return {
      params: {
        'event-in-city': myEvent.id.toString(),
      }
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}
