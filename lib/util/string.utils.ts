export const containsDuplicate = (arr: string[], input: string, caseSensitive = false): boolean => {
  if (!arr) return false;
  if (!input) return false;

  const results = arr.filter((value) => {
    let compareValue = value;
    let inputValue = input;
    if (!caseSensitive) {
      compareValue = value.toLocaleLowerCase();
      inputValue = input.toLocaleLowerCase();
    }
    return inputValue === compareValue;
  });

  return results?.length > 1;
};

export const containsValue = (arr: string[], input: string, caseSensitive = false): boolean => {
  if (!arr) return false;
  if (!input) return false;

  if (!caseSensitive) {
    const inputValue = input.toLocaleLowerCase();

    const results = arr.filter((value) => {
      const compareValue = value.toLocaleLowerCase();

      return inputValue === compareValue;
    });

    return results?.length > 0;
  } else {
    return arr.includes(input);
  }
};
