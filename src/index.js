const isLengthMoreThan = minLength => x => x.length > minLength;
const isNotEmpty = x => !!x;

export default (sample, { caseSensitive = false, minLength = 2, predicates = [] } = {}) => {
  const applyPredicates = [
    minLength > 0 ? isLengthMoreThan(minLength) : () => true,
    ...predicates,
  ];

  return sample
    .split(/\s+/)
    .filter(isNotEmpty)
    .map(x => (caseSensitive ? x : x.toLowerCase()))
    .filter(x => applyPredicates.every(predicate => predicate(x)))
    .reduce((acc, word) => {
      const count = acc[word] || 0;

      return {
        ...acc,
        [word]: count + 1,
      };
    }, {});
};
