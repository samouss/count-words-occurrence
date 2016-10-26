const isLengthMoreThan = minLength => x => x.length > minLength;
const isNotEmpty = x => !!x;

export default (sample, { caseSensitive = false, minLength = 2 } = {}) =>
  sample
    .split(/\s+/)
    .filter(isNotEmpty)
    .filter(isLengthMoreThan(minLength))
    .reduce((acc, word) => {
      const wordCase = caseSensitive ? word : word.toLowerCase();
      const count = acc[wordCase] || 0;

      return {
        ...acc,
        [wordCase]: count + 1,
      };
    }, {});
