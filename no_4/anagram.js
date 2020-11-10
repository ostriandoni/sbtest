const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
const char4 = [];
const char3 = [];

function isAnagram(string1, string2) {
  function createCharMap(text) {
    let charMap = {};

    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }

    return charMap;
  }

  if (string1.length === string2.length) {
    let string1Map = createCharMap(string1);
    let string2Map = createCharMap(string2);

    for (let char in string1Map) {
      if (string1Map[char] !== string2Map[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

for (const word1 of words) {
  for (const word2 of words) {
    if (word1 != word2 && isAnagram(word1, word2)) {
      if (word1.length == 4) {
        char4.push(word1);
      } else if (word1.length == 3) {
        char3.push(word1);
      }
    }
  }
}

const result = [[...new Set(char4)], [...new Set(char3)]];
console.log(result);
