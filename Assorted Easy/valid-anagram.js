var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charMapping = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!charMapping.has(s[i])) {
      charMapping.set(s[i], 1);
    } else {
      const update = charMapping.get(s[i]) + 1;
      charMapping.set(s[i], update);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!charMapping.has(t[j])) {
      return false;
    }
    const value = charMapping.get(t[j]);
    if (value === 1) {
      charMapping.delete(t[j]);
    } else {
      charMapping.set(t[j], value - 1);
    }
  }

  return !Boolean(charMapping.size);
};

isAnagram("anagram", "nagaram");
