var findAnagrams = function (s, p) {
  const output = [];
  const pMap = new Map();
  const k = p.length;
  for (let i = 0; i < p.length; i++) {
    if (pMap.has(p[i])) {
      pMap.set(p[i], pMap.get(p[i]) + 1);
    } else {
      pMap.set(p[i], 1);
    }
  }

  const sMap = new Map();
  for (let i = 0; i < k; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  if (areMapsEqual(sMap, pMap)) {
    output.push(0);
  }

  for (let left = 0; left < s.length - k; left++) {
    const charCount = sMap.get(s[left]);
    if (charCount === 1) {
      sMap.delete(s[left]);
    } else {
      sMap.set(s[left], charCount - 1);
    }

    if (sMap.has(s[left + k])) {
      sMap.set(s[left + k], sMap.get(s[left + k]) + 1);
    } else {
      sMap.set(s[left + k], 1);
    }

    if (areMapsEqual(sMap, pMap)) {
      output.push(left + 1);
    }
  }
  return output;
};

function areMapsEqual(map1, map2) {
  console.log("smap", map1, "pmap", map2);
  for (let [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}

findAnagrams("aa", "bb");
