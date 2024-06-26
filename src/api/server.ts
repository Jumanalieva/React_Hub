const token = '8522fc4afcc8e0b250de7bffe10abce1f007e79b40189aed';

export const server_calls = {
  get: async () => {
    const response = await fetch('https://flask-hub.onrender.com/api/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch('https://flask-hub.onrender.com/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to create new data on the server');
    }

    return await response.json();
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://flask-hub.onrender.com/api/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update data on the server');
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`https://flask-hub.onrender.com/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete data from the server');
    }
  }
};