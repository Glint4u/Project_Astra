export const encrypter = (id) => {
  let new_id = "";
  const arr = {
      "_": "AKxZ", ".": "qojs", "{": "Jhst", "}": "Ijst", "-": "IshB", "'": "IWys",
      "0": "VheG", "1": "AkuS", "2": "AhJs", "3": "Jahs", "4": "AkJs", "5": "XjhD",
      "6": "XzsC", "7": "ZplS", "8": "PsJo", "9": "iaKo", "A": "qHsG", "B": "WaSa",
      "C": "eDhG", "D": "rSiF", "E": "tajD", "F": "YdhD", "G": "UkOa", "H": "ibkJ",
      "I": "odJK", "J": "PwpI", "K": "AvBj", "L": "SjdO", "M": "DaKj", "N": "fDnI",
      "O": "GdnO", "P": "HpId", "Q": "JDpI", "R": "KdkO", "S": "lDou", "T": "zdOU",
      "U": "xqiY", "V": "cShY", "W": "VaJg", "X": "BdSd", "Y": "Ndfv", "Z": "Mbhd",
      "a": "Mjah", "b": "Kals", "c": "dOLa", "d": "Ejaj", "e": "iOks", "f": "Pale",
      "g": "sPla", "h": "sIEj", "i": "JsUs", "j": "IsTy", "k": "JsIa", "l": "MAks",
      "m": "NsjS", "n": "OkOa", "o": "IkaS", "p": "OakS", "q": "PoaW", "r": "WiaS",
      "s": "IjaU", "t": "IakD", "u": "IAsE", "v": "KajS", "w": "OeUd", "x": "YUet",
      "y": "YueT", "z": "QuRT",
      "@": "AbCd", "!": "EfGh", "#": "IjKl", "$": "MnOp", "%": "QrSt", "^": "UvWx",
      "&": "Yz01", "*": "2345", "(": "6789", ")": "aBcD", "=": "EeFf", "+": "GgHh",
      "[": "IiJj", "]": "KkLl", ":": "MmNn", ";": "OoPp", "<": "QqRr", ">": "SsTt",
      ",": "UuVv", "?": "WwXx", "|": "YyZz", "`": "1234", "~": "5678", "/": "90-=",
      " ": "ajaj"
  };

  for (let i = 0; i < id.length; i++) {
      const char = id[i];
      if (arr[char]) {
          new_id += arr[char];
      } else {
          new_id += char;
      }
  }

  return new_id;
}

export const decrypter = (encrypted_id) => {
  const reverseArr = {
      "AKxZ": "_", "qojs": ".", "Jhst": "{", "Ijst": "}", "IshB": "-", "IWys": "'",
      "VheG": "0", "AkuS": "1", "AhJs": "2", "Jahs": "3", "AkJs": "4", "XjhD": "5",
      "XzsC": "6", "ZplS": "7", "PsJo": "8", "iaKo": "9", "qHsG": "A", "WaSa": "B",
      "eDhG": "C", "rSiF": "D", "tajD": "E", "YdhD": "F", "UkOa": "G", "ibkJ": "H",
      "odJK": "I", "PwpI": "J", "AvBj": "K", "SjdO": "L", "DaKj": "M", "fDnI": "N",
      "GdnO": "O", "HpId": "P", "JDpI": "Q", "KdkO": "R", "lDou": "S", "zdOU": "T",
      "xqiY": "U", "cShY": "V", "VaJg": "W", "BdSd": "X", "Ndfv": "Y", "Mbhd": "Z",
      "Mjah": "a", "Kals": "b", "dOLa": "c", "Ejaj": "d", "iOks": "e", "Pale": "f",
      "sPla": "g", "sIEj": "h", "JsUs": "i", "IsTy": "j", "JsIa": "k", "MAks": "l",
      "NsjS": "m", "OkOa": "n", "IkaS": "o", "OakS": "p", "PoaW": "q", "WiaS": "r",
      "IjaU": "s", "IakD": "t", "IAsE": "u", "KajS": "v", "OeUd": "w", "YUet": "x",
      "YueT": "y", "QuRT": "z",
      "AbCd": "@", "EfGh": "!", "IjKl": "#", "MnOp": "$", "QrSt": "%", "UvWx": "^",
      "Yz01": "&", "2345": "*", "6789": "(", "aBcD": ")", "EeFf": "=", "GgHh": "+",
      "IiJj": "[", "KkLl": "]", "MmNn": ":", "OoPp": ";", "QqRr": "<", "SsTt": ">",
      "UuVv": ",", "WwXx": "?", "YyZz": "|", "1234": "`", "5678": "~", "90-=": "/",
      "ajaj": " "
  };

  let decrypted_id = "";
  let temp = "";

  for (let i = 0; i < encrypted_id.length; i++) {
      temp += encrypted_id[i];
      if (reverseArr[temp]) {
          decrypted_id += reverseArr[temp];
          temp = "";
      }
  }

  return decrypted_id;
};
