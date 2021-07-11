import { of, concat, interval, delay } from "rxjs";

export const test = () => {
  const observable = concat(of(1, 2), of(3, 4), of(5, 6));

  observable.subscribe((v) => {
    console.log(`From concat: ${v}`);
  });
};

export const testWithInterval = () => {
  // The second observable never run because the first observable call will not be finished.
  const observable = concat(interval(1000), of("Infinite"));

  observable.subscribe((v) => {
    console.log(`From concat: ${v}`);
  });
};

export const testWithDelay = () => {
  const observable = concat(of(1).pipe(delay(2000)), of(2).pipe(delay(2000)));

  observable.subscribe({
    next: (v) => {
      console.log(`From concat: ${v}`);
    },
  });
};
