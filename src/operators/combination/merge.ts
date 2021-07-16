import { interval, merge } from "rxjs";
import { mapTo, mergeWith } from "rxjs/operators";

export const testStaticMethod = () => {
  const first = interval(2000).pipe(mapTo("first"));
  const second = interval(1000).pipe(mapTo("second"));
  const third = interval(3000).pipe(mapTo("third"));

  const source = merge(first, second, third);

  source.subscribe({
    next: (v) => {
      console.log(`From merge: ${v}`);
    },
  });
};

export const testInstanceMethod = () => {
  const first = interval(2000);
  const second = interval(1000);

  const source = first.pipe(mergeWith(second));

  source.subscribe({
    next: (v) => {
      console.log(`From merge: ${v}`);
    },
  });
};
