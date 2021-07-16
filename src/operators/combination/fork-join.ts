import { interval, of, forkJoin, throwError } from "rxjs";
import { catchError, delay, take } from "rxjs/operators";

export const test = () => {
  const source = forkJoin({
    one: of(1),
    two: of(2).pipe(delay(1000)),
    three: interval(1000).pipe(take(5)),
    four: interval(1000).pipe(take(3)),
  });

  source.subscribe({
    next: (v) => {
      console.log(v);
    },
  });
};

export const testWithError = () => {
  const source = forkJoin({
    one: of(1),
    two: of(2).pipe(delay(1000)),
    three: throwError(() => "error"),
  }).pipe(catchError((error) => of(error)));

  source.subscribe({
    next: (v) => {
      console.log(v);
    },
  });
};

export const testWithInnerError = () => {
  const source = forkJoin({
    one: of(1),
    two: of(2).pipe(delay(1000)),
    three: throwError(() => "error").pipe(catchError((error) => of(error))),
    four: interval(1000).pipe(take(3)),
  });

  source.subscribe({
    next: (v) => {
      console.log(v);
    },
  });
};
