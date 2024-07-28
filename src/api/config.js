import ky from 'ky';
import { getSupabaseAccessToken, logout } from './supabaseClient';

export const apiConfig = ky.create({
  prefixUrl: process.env.REACT_APP_BACKEND_URL,
  timeout: 600000,
  retry: 0,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = await getSupabaseAccessToken();
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      }
    ],
    afterResponse: [
      async (_req, _opt, res) => {
        if (res.status === 401) {
          await logout();
          throw new Error('Authorization revoked!');
        }
        return res;
      },
    ],
  },
});