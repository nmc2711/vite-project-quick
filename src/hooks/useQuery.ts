import qs from 'query-string';

interface Props {
  [name: string]: any;
}

function urlQuery(data: Props) {
  const query = qs.stringify(data, { skipNull: true, skipEmptyString: true });
  return `?${query}`;
}

export default urlQuery;
