import { pairwise, take } from "rxjs/operators";
import { interval } from "rxjs";

export const test = () => {
  const observable = interval(500).pipe(pairwise(), take(5));

  const subscriber = observable.subscribe({
    next: (val) => {
      console.log(`From pairwise: ${val}`);
    },
  });
};
