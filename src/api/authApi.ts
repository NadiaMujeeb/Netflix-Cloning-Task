import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Change signUpUser to accept an object
export const signUpUser = async (userData: { name: string; email: string; password: string }) => {
  return await axios.post(`${API_URL}/signup`, userData); // Pass the object directly
};

// Change signInUser to accept an object
export const signInUser = async (userData: { email: string; password: string }) => {
  return await axios.post(`${API_URL}/signin`, userData); // Pass the object directly
};
