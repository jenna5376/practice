package leetcode;

import java.util.HashMap;
import java.util.Map;

public class Twosum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> comps = new HashMap<>();
        for (int i = 0; i<nums.length; i++){
            Integer compIndex = comps.get(nums[i]);
            if (compIndex != null){
                return new int[] {i, compIndex};
            }
            comps.put(target-nums[i], i);
        }
        return nums;
    }
}
