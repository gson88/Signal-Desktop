import { assert } from 'chai';
import { addIndexToFileName } from '../../util/addIndexToFileName';

describe('addIndexToFileName', () => {
  it('works with filename with file extension', () => {
    const actual = addIndexToFileName({
      fileName: 'funny-cat.mov',
      index: 4,
    });
    const expected = 'funny-cat-004.mov';
    assert.strictEqual(actual, expected);
  });

  it('works with filename without file extension', () => {
    const actual = addIndexToFileName({
      fileName: 'funny-cat',
      index: 4,
    });
    const expected = 'funny-cat-004';
    assert.strictEqual(actual, expected);
  });

  it('works with filename with two dots', () => {
    const actual = addIndexToFileName({
      fileName: 'funny-cat.mov.gif',
      index: 4,
    });
    const expected = 'funny-cat.mov-004.gif';
    assert.strictEqual(actual, expected);
  });

  it('works with filename with lots of fake extensions', () => {
    const actual = addIndexToFileName({
      fileName: 'funny-cat.gif.cat.gif.gif',
      index: 4,
    });
    const expected = 'funny-cat.gif.cat.gif-004.gif';
    assert.strictEqual(actual, expected);
  });

  it('works with filename with lots of different fake extensions', () => {
    const actual = addIndexToFileName({
      fileName: 'funny-cat.gif.cat.gif.gif.cat',
      index: 4,
    });
    const expected = 'funny-cat.gif.cat.gif.gif-004.cat';
    assert.strictEqual(actual, expected);
  });
});
