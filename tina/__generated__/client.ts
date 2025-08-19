import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2eae713c34cfda47054f398afb54197e1834e9d3', queries,  });
export default client;
  