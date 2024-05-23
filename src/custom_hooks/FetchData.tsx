import { useEffect, useState } from 'react';
import { server_calls } from "../api/server";

// Define the type for the event data
interface EventData {
    id: string;
    title: string;
    event_type: string;
    description: string;
    location: string;
    start_time: string;
    end_time: string;
    photo_url: string;
}

export const useGetData = () => {
    const [eventData, setData] = useState<EventData[]>([]);

    async function handleDataFetch() {
        const result = await server_calls.get();  // Adjust the endpoint if needed
        // Map the result to format the Google Drive URL to the photo_url field
        const formattedData = result.map((event: any) => ({
            ...event,
            photo_url: `https://drive.google.com/uc?export=view&id=${event.photo_url}` // Assuming event.photo_url contains the file ID
        }));
        setData(formattedData);
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    return { eventData, getData: handleDataFetch };
}
