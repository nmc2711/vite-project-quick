import { isObject, isString } from 'lodash';

function useGetClassName(...args: unknown[]) {
  const className: string[] = [];

  args.forEach((item) => {
    if (isString(item)) {
      className.push(item);
    } else if (isObject(item)) {
      Object.keys(item).forEach((key) => {
        if (item[key]) {
          className.push(key);
        }
      });
    }
  });

  return className.join(' ');
}

export default useGetClassName;