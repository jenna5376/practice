package leetcode;

public class AddTwoNumbers {

	/**
	 * Definition for singly-linked list.
	 * public class ListNode {
	 *     int val;
	 *     ListNode next;
	 *     ListNode() {}
	 *     ListNode(int val) { this.val = val; }
	 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
	 * }
	 */
	class Solution {
	    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
	        ListNode head = new ListNode(0);
	        ListNode l3 = head;
	        int carry = 0;

	        while (l1 != null || l2 != null){
	            int l1_val = (l1 != null) ? l1.val : 0;
	            int l2_val = (l2 != null) ? l2.val : 0;
	            
	            int node_sum = l1_val + l2_val + carry;
	            carry = node_sum / 10;
	            int digit = node_sum % 10;

	            ListNode new_node = new ListNode(digit);
	            l3.next = new_node;
	            l3 = l3.next;

	            l1 = (l1 != null) ? l1.next : l1;
	            l2 = (l2 != null) ? l2.next : l2;
	        }

	        if (carry != 0){
	            ListNode new_node = new ListNode(carry);
	            l3.next = new_node;
	            l3 = l3.next;
	        }

	        return head.next;
	    }
	}
}
