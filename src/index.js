exports.min = function min(array) {
    let result = 0;
    if (!array) {
        return 0;
    }

    array.forEach((element) => {
        result > element ? (result = element) : result;
    });
    return result;
};

exports.max = function max(array) {
    let result = 0;
    if (!array) {
        return 0;
    }

    array.forEach((element) => {
        result < element ? (result = element) : result;
    });
    return result;
};

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
      return 0;
  }
  let result = array.reduce((sum, current) => sum + current, 0);

  return result/array.length;
};
