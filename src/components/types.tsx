export interface RootState {
    root: {
      title: string;
      eventtype: string;
      description: string;
      location: string;
      starttime: string;
      endtime: string;
    };
  }
  
  export interface EventFormProps {
    id?: string[];
    onClose: () => void;
  }
 