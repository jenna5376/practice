package leetcode;

public class LongestSubstringWoRepeat {
    class Solution {
        public int lengthOfLongestSubstring(String s) {
            int length = 0;
            String substring = "";
            int sLength = s.length();
    
            for (int i = 0; i<sLength; i++){
                String curr = String.valueOf(s.charAt(i));
                int index = substring.indexOf(curr);
    
                if (index >= 0){
                    int currLength = substring.length();
                    if (currLength > length){
                        length = currLength;
                    }
                    substring = substring.substring(index+1) + curr;
                }
                else{
                    substring += curr;
                }
            }
    
            int currLength = substring.length();
    
            if (length == 0){
                length = sLength;
            }
            else if (currLength > length){
                length = currLength;
            }
    
            return length;
        }
    }
}
