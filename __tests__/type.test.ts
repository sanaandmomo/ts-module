/**
 * @jest-environment jsdom
 */
import { expectType } from 'tsd';

import _ from '../src';

_('.button').addEvent('click', function (event) {
  expectType<MouseEvent>(event);
});

expectType<Promise<{ name: string }>>(
  _.fetch<{ name: string }>('https://example.com', {
    method: 'GET',
  }).then((res) => res.json())
);

expectType<true>(_.isNull<null>(null));
expectType<false>(_.isNull(2));
expectType<false>(_.isNull(0));

expectType<true>(_.isNil<null>(null));
expectType<true>(_.isNil<undefined>(undefined));
expectType<false>(_.isNil(0));

expectType<true>(_.isNumber(1));
expectType<false>(_.isNumber('1'));

expectType<(1 | 2 | 3 | 4)[]>(_.shuffle([1, 3, 2, 4]));

expectType<{ a: 1; b: 2 }>(_.pick({ a: 1, b: 2, c: 3 }, 'a', 'b'));

expectType<{ c: number }>(_.omit({ a: 1, b: 2, c: 3 }, 'a', 'b'));

expectType<() => 1>(_.memoize(() => 1));
expectType<(a: number, b: number) => number>(
  _.memoize((a: number, b: number) => a + b)
);

expectType<() => void>(_.debounce(() => console.log('debounce'), 400));
