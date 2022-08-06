import express, { Express, Request, Response } from 'express';
import { modelIndex } from './interface/model/model-index';

const app: Express = express();
const port = 3000;

app.get('/', (request: Request, response: Response) => {
  const openMessage = new modelIndex('Welcome to the Protocol System.')
  response.json(openMessage);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app