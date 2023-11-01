const endpoints = {
    BUTTON_API: `${import.meta.env.VITE_API_URL}/buttons`
  } as const;
  
  export type Counter = {
    id: number;
    count: number;
  };

  type ResponseData<T> = {
    error: string;
    statusCode: number;
    success: boolean;
    result: T;
  };

export async function fetchButtons(): Promise<Counter[]> {
    try {
      const response = await fetch(`${endpoints.BUTTON_API}`,{
        method:'GET'
      });
      if (response.ok) {
        const data: ResponseData<Counter[]> = await response.json();
        if (data.statusCode === 200 && data.success) {
          return data.result;
        } else {
          throw new Error('Failed to fetch buttons');
        }
      } else {
        throw new Error('Failed to fetch buttons');
      }
    } catch (error) {
      console.error('Error fetching buttons:', error);
      throw error;
    }
  }
  
  export async function addCounter(): Promise<Counter> {
    try {
      const response = await fetch(`${endpoints.BUTTON_API}`, { method: 'POST' });
      if (response.ok) {
        const data: ResponseData<Counter> = await response.json();
        if (data.statusCode === 200 && data.success) {
          return data.result;
        } else {
          throw new Error('Failed to add a counter');
        }
      } else {
        throw new Error('Failed to add a counter');
      }
    } catch (error) {
      console.error('Error adding a counter:', error);
      throw error;
    }
  }
  
  export async function updateCounter(buttonId: number): Promise<Counter> {
    try {
      const response = await fetch(`${endpoints.BUTTON_API}/${buttonId}`, {
        method: 'PUT',
      });
      if (response.ok) {
        const data: ResponseData<Counter> = await response.json();
        if (data.statusCode === 200 && data.success) {
          return data.result;
        } else {
          throw new Error('Failed to update the counter');
        }
      } else {
        throw new Error('Failed to update the counter');
      }
    } catch (error) {
      console.error('Error updating the counter:', error);
      throw error;
    }
  }
  
  export async function deleteCounter(buttonId: number): Promise<Counter> {
    try {
      const response = await fetch(`${endpoints.BUTTON_API}/${buttonId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const data: ResponseData<Counter> = await response.json();
        if (data.statusCode === 200 && data.success) {
          return data.result;
        } else {
          throw new Error('Failed to delete the counter');
        }
      } else {
        throw new Error('Failed to delete the counter');
      }
    } catch (error) {
      console.error('Error deleting the counter:', error);
      throw error;
    }
  }