/* eslint-disable no-console */
import { createMachine } from 'xstate';

const trafficMachine = createMachine({
  id: 'traffic',
  initial: 'green',
  states: {
    green: {
      entry: () => {
        console.log('Entered Green');
      },
      after: {
        // after 1 second, transition to yellow
        9000: { target: 'yellow' },
      },
      exit: () => {
        console.log('Exiting Green');
      },
    },
    yellow: {
      entry: () => {
        console.log('Entered Yellow');
      },
      after: {
        // after 0.5 seconds, transition to red
        1000: { target: 'red' },
      },
      exit: () => {
        console.log('Exiting Yellow');
      },
    },
    red: {
      entry: () => {
        console.log('Entered Red');
      },
      after: {
        // after 2 seconds, transition to green
        30000: { target: 'green' },
      },
      exit: () => {
        console.log('Exiting Red');
      },
    },
  },
});

export { trafficMachine };
