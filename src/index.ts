import express from 'express';
import { interpret } from 'xstate';

import { trafficMachine } from './machine/trafficLight';

const app = express();

app.get('/', (req, res) => {
  interpret(trafficMachine).start();
  res.send('Hello, Express and TypeScript!');
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
