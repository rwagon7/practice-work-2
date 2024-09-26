package com.java.DAY4;

public class KandaneAlgorithm {

    public static int[] input = {5, 4, 1, 7, 8}; //{2, 3, -8, 7, -1, 2, 3};

    public static void main(String[] args) {
        System.out.println(largestSum(input));
    }

    private static int largestSum(int[] input) {
        // intializers
        int i = 0, n = input.length, res = 0, maxEnding = 0;
        // while loop
        while (i < n) {
            // Find the maximum sum ending at index i by either extending
            // the maximum sum subarray ending at index i - 1 or by
            // starting a new subarray from index i
            maxEnding = Math.max(maxEnding + input[i], input[i]);
            // Update res if maximum subarray sum ending at index i > res
            res = Math.max(res, maxEnding);
            i++;

        }

        return res;
    }

}
