import { of, interval } from "rxjs";
import { concatAll, map, take } from "rxjs/operators";

export const test = () => {
  const source = interval(2000);
  const observable = source.pipe(
    map((v) => of(v * 10)),
    concatAll()
  );

  observable.subscribe({
    next: (v) => {
      console.log(`From concatAll: ${v}`);
    },
  });
};

export const testWithPromise = () => {
  const promise = (val: number) => Promise.resolve(val);

  const source = interval(2000);
  const observable = source.pipe(
    map((v) => promise(v)),
    concatAll()
  );

  observable.subscribe({
    next: (v) => {
      console.log(`From concatAll with promise: ${v}`);
    },
  });
};

export const testWithDelay = () => {
  const obs1 = interval(1000).pipe(take(5));
  const obs2 = interval(500).pipe(take(2));
  const obs3 = interval(2000).pipe(take(1));

  const source = of(obs1, obs2, obs3);

  const obs = source.pipe(concatAll());

  obs.subscribe({
    next: (v) => {
      console.log(`From concatAll with delay: ${v}`);
    },
  });
};
