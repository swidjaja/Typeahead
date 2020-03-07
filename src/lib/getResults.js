import data from './data';

export default (queryStr) => {
  if (queryStr === '') return [];
  const regex = new RegExp(`^${queryStr}`, 'i');
  return data.filter(datum => datum.match(regex) !== null);
}
