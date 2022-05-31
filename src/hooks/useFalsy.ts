import { useEffect, useState } from 'react';

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray);
    return {
      value,
      setValue,
      add: (item: T) => {
        setValue([...value, item]);
      },
      clear: () => {
        setValue([]);
      },
      removeIndex: (index: number) => {
        const copy = [...value];
        copy.splice(index, 1);
        setValue(copy);
      },
    };
  };