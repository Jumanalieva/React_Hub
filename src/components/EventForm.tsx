import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/slices/RootSlice';
import { server_calls } from "../api/server";
import Button from './Button';
import Input from './Input';

interface EventFormProps {
  id?: string;
  onClose: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ id, onClose }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    if (id) {
      server_calls.update(id, data)
        .then(() => console.log(`Updated: ${data.title} ${id}`))
        .catch(err => console.error(err));
    } else {
      const newEvent = {
        id: (Math.random() * 100000).toFixed(0), 
        ...data
      };
      dispatch(addEvent(newEvent));
      server_calls.create(newEvent)
        .then(() => console.log('Event created'))
        .catch(err => console.error(err));
    }
    onClose(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto p-6 bg-stone-200 rounded shadow">
      <p className="text-center text-xl xl:text-2xl text-red-700 mb-4">Refresh page after submitting</p>
      <div>
        <Input {...register('title')} name='title' placeholder="TITLE" />
      </div>
      <div>
        <Input {...register('event_type')} name='event_type' placeholder="EVENT TYPE" />
      </div>
      <div>
        <Input {...register('description')} name='description' placeholder="DESCRIPTION" />
      </div>
      <div>
        <Input {...register('location')} name='location' placeholder="LOCATION" />
      </div>
      <div>
        <Input {...register('start_time')} name='start_time' placeholder="STARTS (ex: 2024-12-31 14:20)" />
      </div>
      <div>
        <Input {...register('end_time')} name='end_time' placeholder="ENDS (ex: 2024-05-25 08:10)" />
      </div>
      <div className="flex justify-between p-1">
        <button type="submit" className="px-5 py-2 font-semibold bg-stone-200 border-2 border-gray-800 rounded-full m-5 hover:bg-slate-800 hover:text-white">
          Submit
        </button>
        <Button className="px-5 py-2 font-semibold bg-stone-200 border-2 border-gray-800 rounded-full m-5 hover:bg-slate-800 hover:text-white" onClick={onClose}>
          Exit
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
