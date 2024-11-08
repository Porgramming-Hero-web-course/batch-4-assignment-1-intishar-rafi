function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((temp) => temp in obj);
  }