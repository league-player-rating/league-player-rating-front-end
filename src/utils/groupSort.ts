interface IReduceReturn {
  result: ICurrObject;
  last?: string | null;
}

interface ICurrObject {
  [key: string]: any;
}

const groupSort = <T extends object>(array: T[], groupBy: string) => {
  const obj = array.reduce((acc: IReduceReturn, curr: ICurrObject) => {
    const key = curr[groupBy];
    if (key === acc.last) {
        acc.result[key].push(curr);
        return acc;
    }
    if (acc.result[key]) {
        acc.result[key].push(curr);
        return acc;
    }

    Object.assign(acc.result, {[key]: [curr]});
    acc.last = key;
    return acc;
  }, {result: {}, last: null});
  return obj.result;
};

// export const ungroup = (object, sortBy) => {
//   const arr = Object.values(object);
//   const sortArrays = arr.map(elem => (
//       elem.sort((first, second) => {
//           if (first[sortBy].indexOf('Other') >= 0) return 1;
//           return first[sortBy] > second[sortBy] ? 1 : -1;
//       })
//   ));
//   return [].concat(...sortArrays);
// }

export default groupSort;