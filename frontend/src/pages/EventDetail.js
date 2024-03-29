import { json, useLoaderData } from 'react-router-dom';

import EventItem from '../../src/components/EventItem';

const EventDetailPage = () => {
  const data = useLoaderData();

  return <EventItem event={data.event}></EventItem>;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event' },
      { status: 500 }
    );
  } else {
    return response;
  }
};
