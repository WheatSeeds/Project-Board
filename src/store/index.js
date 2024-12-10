import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        authenticated: false,
        token: '',
        projects: [],
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post('http://localhost:5000/login', { email, password });
                this.token = response.data.token;
                this.projects = response.data.projects;
                this.authenticated = true;

                // Сохраняем токен в localStorage для дальнейшего использования
                localStorage.setItem('authToken', this.token);
            } catch (error) {
                console.error('Login failed:', error);
                alert('Invalid credentials');
            }
        },
        async register(email, password) {
            try {
                await axios.post('http://localhost:5000/register', { email, password });
                alert('Registration successful! You can now log in.');
            } catch (error) {
                console.error('Registration failed:', error);
                alert('Error during registration.');
            }
        },
        async fetchProjects() {
            try {
                const response = await axios.get('http://localhost:5000/projects', {
                    headers: { Authorization: `Bearer ${this.token}` },
                });
                this.projects = response.data.projects;
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        },
        logout() {
            this.authenticated = false;
            this.token = '';
            this.projects = [];
            localStorage.removeItem('authToken');
        },
    },
});
