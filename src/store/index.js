import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        authenticated: true,
    }),
    actions: {
        setAuthenticated(value) {
            this.authenticated = value;
        }
    }
});
