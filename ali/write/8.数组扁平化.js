//数组扁平化
//拍平数组
let arr = [1, [2, [3, 4, 5]]];

const flat = (arr, depth = 1) => {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flat(arr, 2));
