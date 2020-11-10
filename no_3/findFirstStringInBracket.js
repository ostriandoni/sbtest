function findFirstStringInBracket(myString) {
  const result = myString.match(/\(([^)]+)\)/);
  if (result) return result.pop();
  else return "";
}
