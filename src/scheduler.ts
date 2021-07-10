import { Observable, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

const testAsyncScheduler = () => {
  const observable = new Observable<number>((subscriber) => {
    subscriber.next(0);
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
  }).pipe(observeOn(asyncScheduler));

  console.log("Observable created.");

  observable.subscribe({
    next: (v) => {
      console.log(`Get number: ${v}`);
    },
    error: (e) => {
      console.error(`Error: ${e}`);
    },
    complete: () => {
      console.log("Observable is complete.");
    },
  });

  console.log("Observable subscribed.");
};

export default {
  testAsyncScheduler,
};
