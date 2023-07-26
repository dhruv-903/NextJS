
interface EventData {
    id: string;
    title: string;
    city: string;
    description: string;
    image: string;
    emails_registered: string[];
  }

const SpecificEvent = async (context: any) => {
    const id = context.params.event;
    const { allEvents } = await import('@/data/data.json');
    const eventData:EventData[] = allEvents.filter((event) => {
        return event.id.toLowerCase() === id.toLowerCase();
    })
    console.log(eventData)
    return (
        <div>
            <h1>{eventData[0].title}</h1>
            <img src={eventData[0].image} height={700} width={800} alt="" />
            <p>{eventData[0].description}</p>
        </div>
    )
}

export default SpecificEvent;

export async function getStaticPaths() {
    const data = await import('@/data/data.json')
    const { allEvents } = data;
    const paths = allEvents.map((event) => {
        return {
            params: {
                'event-in-city': event.city,
                'event': event.id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}