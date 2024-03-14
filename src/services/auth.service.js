import axios from 'axios';

const API_URL = 'your_api_base_url';

const login = (data) => {
    console.log("data---->", data);

    const token = 'your_generated_bearer_token';
    const message = 'Login successful';

    return Promise.resolve({ token, message }); // Return a resolved promise

//   return axios.post(`${API_URL}/auth/login`, data)
//     .then(response => {
//       // Handle the successful response here
//       console.log('Login successful:', response.data);
//       return response.data;
//     })
//     .catch(error => {
//       // Handle errors here
//       console.error('Login failed:', error.response ? error.response.data : error.message);
//       throw error;
//     });
    
};

export default { login };
