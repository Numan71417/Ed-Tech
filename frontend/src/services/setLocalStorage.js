export const setLocalStorage = (key, image) => {
    try {
      // Get the existing data from local storage
      const existingDataString = localStorage.getItem(key);
      if (!existingDataString) {
        console.error(`No data found in local storage for key: ${key}`);
        return;
      }
  
      // Parse the existing data
      const existingData = JSON.parse(existingDataString);
  
      // Update only the specified properties
      const newData = { ...existingData, image };
  
      // Save the updated data back to local storage
      localStorage.setItem(key, JSON.stringify(newData));
      console.log(`Data updated in local storage for key: ${key}`);
    } catch (error) {
      console.error('Error updating data in local storage:', error);
    }
  };
  