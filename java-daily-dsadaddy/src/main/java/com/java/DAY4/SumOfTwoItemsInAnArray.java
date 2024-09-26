package com.java.DAY4;

import java.util.Arrays;
import java.util.Optional;

public class SumOfTwoItemsInAnArray {

    public static int[] arr = {-6, -3, -2};
    public static int s = -5;

//    public static int[] arr = {-20, -15, -8, -20};
//    public static int s = -40;


    public static void main(String[] args) {

        var optionalResult = largest(arr, s);
        var optional = optionalResult.isPresent();
        if (optional)
            System.out.println(Arrays.toString(optionalResult.get()));

        System.out.println("Program ended...!");
    }

    private static Optional<int[]> largest(int[] arr, int s) {

        int n = arr.length;
        // looping
        for (int left = 0; left < n; left++) {
            for (int right = n - 1; right >= 0; right--) {
                if (arr[left] + arr[right] == s)
                    return Optional.of(new int[]{left, right});
            }
        }
        // output
        return Optional.empty();
    }

    private static Optional<int[]> chatGPTLargestSum(int[] arr, int s) {
        // intialization
        int right = 0, left = 0, n = arr.length, current_sum = 0;
        // moving from left to right
        while (right < n) {
            // moving to left
            current_sum += arr[right];
            // looping from right to left
            while (current_sum > s && left <= right) {
                current_sum -= arr[left];
                left += 1;
            }
            //final increment
            right++;
            // return statement
            return Optional.of(new int[]{left + 1, right + 1});
        }
        // return statement
        return Optional.empty();
    }
}
