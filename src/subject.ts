import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";

const testSubject = () => {
  const subject = new Subject<number>();

  subject.subscribe({
    next: (v) => {
      console.log(`Subject A: ${v}`);
    },
  });

  subject.next(1);
  subject.next(2);

  subject.subscribe({
    next: (v) => {
      console.log(`Subject B: ${v}`);
    },
  });

  subject.next(3);

  subject.complete();
  subject.unsubscribe();
};

const testBehaviorSubject = () => {
  const behaviorSubject = new BehaviorSubject<number>(0);

  behaviorSubject.subscribe({
    next: (v) => {
      console.log(`Behavior subject A: ${v}`);
    },
  });

  behaviorSubject.next(1);

  behaviorSubject.subscribe({
    next: (v) => {
      console.log(`Behavior subject B: ${v}`);
    },
  });

  behaviorSubject.next(2);
};

const testReplaySubject = () => {
  const replaySubject = new ReplaySubject<number>(3);

  replaySubject.subscribe({
    next: (v) => {
      console.log(`Replay subject A: ${v}`);
    },
  });

  replaySubject.next(1);
  replaySubject.next(2);
  replaySubject.next(3);
  replaySubject.next(4);

  replaySubject.subscribe({
    next: (v) => {
      console.log(`Replay subject B: ${v}`);
    },
  });

  replaySubject.next(5);
};

const testAsyncSubject = () => {
  const asyncSubject = new AsyncSubject<number>();

  asyncSubject.subscribe({
    next: (v) => {
      console.log(`Async subject A: ${v}`);
    },
  });

  asyncSubject.next(1);
  asyncSubject.next(2);
  asyncSubject.next(3);
  asyncSubject.complete();

  asyncSubject.subscribe({
    next: (v) => {
      console.log(`Async subject B: ${v}`);
    },
  });
};

export default {
  testSubject,
  testBehaviorSubject,
  testReplaySubject,
  testAsyncSubject,
};
