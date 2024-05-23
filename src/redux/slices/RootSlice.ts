import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: string;
  title: string;
  event_type: string;
  description: string;
  location: string;
  start_time: string;
  end_time: string;
}

interface EventsState {
  events: Event[];
  title: string;
  event_type: string;
  description: string;
  location: string;
  start_time: string;
  end_time: string;
}

const initialState: EventsState = {
  events: [],
  title: '',
  event_type: '',
  description: '',
  location: '',
  start_time: '',
  end_time: '',
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<Event>) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
    },
    chooseTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    chooseEvent: (state, action: PayloadAction<string>) => {
      state.event_type = action.payload;
    },
    chooseDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    chooseLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    chooseStartTime: (state, action: PayloadAction<string>) => {
      state.start_time = action.payload;
    },
    chooseEndTime: (state, action: PayloadAction<string>) => {
      state.end_time = action.payload;
    },
  },
});

export const {
  addEvent,
  updateEvent,
  deleteEvent,
  setEvents,
  chooseTitle,
  chooseEvent,
  chooseDescription,
  chooseLocation,
  chooseStartTime,
  chooseEndTime,
} = eventsSlice.actions;

export default eventsSlice.reducer;
