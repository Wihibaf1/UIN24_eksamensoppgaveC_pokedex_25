import { createClient } from '@sanity/client';

const Client = createClient({
  projectId: 'lus1ncij',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
});

export default Client;