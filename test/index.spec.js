import { TestScheduler } from "rxjs/testing";
import { map, concatWith, take } from 'rxjs/operators'

describe("Marble testing in RxJS", () => {
  let testScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should convert ASCII diagrams into observables', () => {
    testScheduler.run(helpers => {
      // all testing logic
      const { cold, expectObservable } = helpers;
      const source$ = cold('--a-b---c');
      const expected =     '--a-b---c';

      expectObservable(source$).toBe(expected);
    })
  });

  it('should allow configuration of emitted values', () => {
    testScheduler.run(helpers => {
      // all testing logic
      const { cold, expectObservable } = helpers;
      const source$ = cold('--a-b---c', {a: 1, b: 2, c: 3});
      const final$ = source$.pipe(map(val => val * 10));
      const expected =     '--a-b---c';

      expectObservable(final$).toBe(expected, {a: 10, b: 20, c: 30});
    })
  });


  it('should let you identify subscription points', () => {
    testScheduler.run(helpers => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      const source$    =      cold('-a---b-|');
      const sourceTwo$ =      cold('-c---d-|');
      const fin$ = source$.pipe(concatWith(sourceTwo$));

      const expected =             '-a---b--c---d-|';
      const sourceOneExpectedSub = '^------!';
      const sourceTwoExpectedSub = '-------^------!';

      expectObservable(fin$).toBe(expected);
      expectSubscriptions(source$.subscriptions).toBe(sourceOneExpectedSub);
      expectSubscriptions(sourceTwo$.subscriptions).toBe(sourceTwoExpectedSub);
    })
  });


  it('should let you test hot observables', () => {
    testScheduler.run(helpers => {
      const { cold, hot, expectObservable } = helpers;
      const source$  = hot('--a-b-^-c');
      const final$ = source$.pipe(take(1));
      const expected =           '--(c|)';

      expectObservable(final$).toBe(expected);
    })
  });
});