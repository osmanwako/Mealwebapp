import { starturl } from './restapi.js';

const createcafeid = async () => {
  const response = await fetch(starturl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
export default createcafeid;
