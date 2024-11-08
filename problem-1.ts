function sumArray(aray: number[]): number {
    return aray.reduce((account, current) => account + current, 0);
  }