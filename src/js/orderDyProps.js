export const character = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderDyProps(obj, arrayProperti) {
  let result = [];
  for (const key in obj) {
    if (!arrayProperti.includes(key)) {
      result.push(key);
    }
  }
  result = [...arrayProperti, ...result.sort()];
  const finalResult = [];
  for (const key of result) {
    finalResult.push({
      key,
      value: obj[key],
    });
  }
  return finalResult;
}
