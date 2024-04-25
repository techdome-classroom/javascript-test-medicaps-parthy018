function longestSubstring(s) {
    // Implementation of longestSubstring function
   


   let  result = 0;
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        if (charIndexMap[s[i]] >= start) {
            start = charIndexMap[s[i]] + 1;
        }
        charIndexMap[s[i]] = i;
        result = Math.max(result, i - start + 1);
    }

   return result;
}

module.exports = { longestSubstring };


