const authService = {
    login: (data) => {
        const token = 'your_generated_bearer_token';
        const message = 'Login successful';
        return Promise.resolve({ token, message });
    },
    getAll: () => {
        return [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }      
        ];
    }
};

export default authService;