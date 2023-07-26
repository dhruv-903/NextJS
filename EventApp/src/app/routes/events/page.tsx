const Events = async () => {
    const data = await getEventsData();
    return (
        <div>
            {
                data.map((event) => {
                    return (
                        <a key={event.id} href={`/routes/events/${event.id}`}>
                            <h2>{event.title}</h2>
                            <img src={event.image} height={400} width={350} />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Events;

async function getEventsData() {
    const data = await import('@/data/data.json');
    return data.events_categories;
}