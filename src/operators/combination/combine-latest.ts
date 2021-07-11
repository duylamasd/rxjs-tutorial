import { timer, combineLatest } from "rxjs";

export const test = () => {
  const timer1 = timer(1000, 4000);
  const timer2 = timer(2000, 4000);
  const timer3 = timer(3000, 4000);

  const observable = combineLatest([timer1, timer2, timer3]);

  observable.subscribe(([timer1Val, timer2Val, timer3Val]) => {
    console.log(timer1Val, timer2Val, timer3Val);
  });
};

export const testWithProjectionFunction = () => {
  const timer1 = timer(1000, 4000);
  const timer2 = timer(2000, 4000);
  const timer3 = timer(3000, 4000);

  const observable = combineLatest(
    [timer1, timer2, timer3],
    (one, two, three) => {
      return {
        one,
        two,
        three,
      };
    }
  );

  observable.subscribe((times) => {
    console.log(times);
  });
};
