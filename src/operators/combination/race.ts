import { mapTo, delay, map } from "rxjs/operators";
import { interval, race, of } from "rxjs";

export const test = () => {
  const observable = race(
    interval(1500),
    interval(1000).pipe(mapTo("Winner")),
    interval(2000),
    interval(3000)
  );

  const subscriber = observable.subscribe({
    next: (v) => {
      console.log(v);
    },
  });
};

/**
 * Should log nothing because of error.
 */
export const testWithError = () => {
  const first = of("first").pipe(
    delay(100),
    map((_) => {
      throw new Error("error");
    })
  );

  const second = of("second").pipe(delay(200));
  const third = of("third").pipe(delay(300));

  race(first, second, third).subscribe({
    next: (v) => {
      console.log(v);
    },
  });
};
