function countWordOccurrences(sentence: string, word: string): number {
   
    const lower = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
  
   
    const temp = lower.split(" ");
  
    
    return temp.filter((words) => words === lowerWord).length;
  }