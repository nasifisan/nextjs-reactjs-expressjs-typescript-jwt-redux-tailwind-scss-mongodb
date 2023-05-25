export const getNewGuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (c) => {
      let r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;

      return v.toString();
    }
  );
};

export const getValue = (obj: object, key: string): any => {
  return key
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter((t) => t !== '')
    .reduce((prev: any, cur) => prev && prev[cur], obj);
};
