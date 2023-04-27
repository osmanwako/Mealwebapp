import { start_url } from './restapi.js';

const createcafeid = async () => {
  const response = await fetch(start_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export default createcafeid;
