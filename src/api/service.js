import { apiConfig } from './config.js';

class ApiService {
    constructor(apiConfig) {
        this.apiConfig = apiConfig;
    }
    async getChatbotResponse(message, threadId) {
        const requestData = {
            message: message,
            thread_id: threadId
        };

        try {
            const response = await this.apiConfig.post('generate-threat-scenarios', { json: requestData }).json();
            return response.response;
        } catch (error) {
            console.error('Error generating threat scenarios:', error);
            throw error;
        }
    }
}

export const api = new ApiService(apiConfig);
