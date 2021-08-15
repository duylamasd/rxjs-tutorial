import { delay, map, mergeAll, take } from "rxjs/operators";
import { interval, of } from "rxjs";

export const testWithPromises = () => {
  const convertToPromise = (val: number) =>
    new Promise<string>((resolve) =>
      setTimeout(() => resolve(`Result: ${val}`), 2000)
    );

  const source = of(1, 2, 3);

  const observable = source.pipe(
    map((val) => convertToPromise(val)),
    mergeAll()
  );

  const subscriber = observable.subscribe({
    next: (val) => {
      console.log(val);
    },
  });
};

export const testWithConcurrentParameter = () => {
  const source = interval(500).pipe(take(5));

  const observable = source.pipe(
    map((val) => source.pipe(delay(1000), take(4))),
    mergeAll(1)
  );

  const subscriber = observable.subscribe((val) => {
    console.log(`From mergeAll with concurrent param: ${val}`);
  });
};
