import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { useGetData } from '../custom_hooks/FetchData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { format } from 'date-fns';

interface EventData {
    id: string;
    title: string;
    event_type: string;
    description: string;
    location: string;
    start_time: string;
    end_time: string;
}

const DataCard: React.FC = () => {
    const { eventData, getData } = useGetData();
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

    const handleOpen = (id: string) => {
        setSelectedId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedId(undefined);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        if (event.target.checked) {
            setSelectedId(id);
        } else {
            setSelectedId(undefined);
        }
    };

    const deleteData = () => {
        if (selectedId) {
            server_calls.delete(selectedId);
            getData();
        }
    };

    const formatDateTime = (dateTime: string) => {
        return format(new Date(dateTime), 'MMMM d, yyyy h:mm a');
    };

    return (
        <>
            <Modal
                id={selectedId}
                open={open}
                onClose={handleClose}
            />

            <div className="container text-center mx-auto p-8 space-y-2">
                <h2 className="p-6 bg-stone-200 my-5 text-center text-stone-800 text-4xl rounded">UPCOMING EVENTS</h2>
                <Button onClick={() => handleOpen('')} className="px-5 py-2 font-semibold bg-stone-200 border-2 border-gray-800 rounded-full m-5 hover:bg-slate-800 hover:text-white">WRITE</Button>
                <Button onClick={() => handleOpen(selectedId || '')} className="px-5 py-2 font-semibold bg-stone-200 border-2 border-gray-800 rounded-full m-5 hover:bg-slate-800 hover:text-white">UPDATE</Button>
                <Button onClick={deleteData} className="px-5 py-2 font-semibold bg-stone-200 border-2 border-gray-800 rounded-full m-5 hover:bg-slate-800 hover:text-white">DELETE</Button>
            </div>
            <div className="container mx-10 my-2">
                <Grid container spacing={4}>
                    {eventData.map((event: EventData) => (
                        <Grid item xs={12} sm={12} md={6} key={event.id}>
                            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedId === event.id}
                                                onChange={(e) => handleCheckboxChange(e, event.id)}
                                                name="selectEvent"
                                                sx={{ transform: 'scale(1.5)' }}
                                            />
                                        }
                                        label=""
                                    />
                                </div>
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.60rem' }}>
                                        <small className='text-red-500 text-lg lg:text-2xl xl:text-2xl'>Title: </small>{event.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.25rem' }}>
                                        <small className='text-red-500 text-lg lg:text-xl xl:text-xl'>Description: </small>{event.description}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.25rem' }}>
                                        <small className='text-red-500 text-lg lg:text-xl xl:text-xl'>Event: </small>{event.event_type}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.25rem' }}>
                                        <small className='text-red-500 text-lg lg:text-xl xl:text-xl'>Location:</small> {event.location}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.25rem' }}>
                                        <small className='text-red-500 text-lg lg:text-xl xl:text-xl'>Starts:</small> {formatDateTime(event.start_time)}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.25rem' }}>
                                        <small className='text-red-500 text-lg lg:text-xl xl:text-xl'>Ends:</small> {formatDateTime(event.end_time)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default DataCard;
