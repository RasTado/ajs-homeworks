export default function orderByProps(data, sorted) {
  const sortProps = [];
  const alphProps = [];

  for (const prop in data) {
    if (!sorted.includes(prop)) {
      alphProps.push({ key: prop, value: data[prop] });
    } else {
      sortProps.push({ key: prop, value: data[prop] });
    }
  }
  alphProps.sort((a, b) => (a.key > b.key ? 1 : -1));
  sortProps.sort((a, b) => sorted.indexOf(a.key) - sorted.indexOf(b.key));
  return sortProps.concat(alphProps);
}
