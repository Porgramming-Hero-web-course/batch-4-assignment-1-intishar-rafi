function removeDuplicates(aray: number[]): number[] {
    const temp: Set<number> = new Set();
    const result: number[] = [];
  
    for (const element of aray) {
      if (!temp.has(element)) {
        temp.add(element);
        result.push(element);
      }
    }
  
    return result;
  }