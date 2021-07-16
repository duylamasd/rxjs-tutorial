import { of } from "rxjs";
import { endWith, finalize } from "rxjs/operators";

export const test = () => {
  const source = of(1, 2, 3);

  source.pipe(endWith(2)).subscribe({
    next: (v) => {
      console.log(`From endWith: ${v}`);
    },
  });
};

export const testWithMultpleValues = () => {
  const source = of(1, 2, 3);

  source.pipe(endWith(2, 3)).subscribe({
    next: (v) => {
      console.log(`From endWith: ${v}`);
    },
  });
};

export const testWithFinalize = () => {
  const source = of(1, 2, 3);

  source
    .pipe(
      endWith(2, 3),
      finalize(() => {
        console.log("finally");
      })
    )
    .subscribe({
      next: (v) => {
        console.log(`From endWith: ${v}`);
      },
    });
};
