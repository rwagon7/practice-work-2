# Kandane's algorithm

## *USEAGE*: to find the largest sum of a sub array

### test cases
- All are positive
- All are negative
- Can be zero & duplicates in array
- Should not consider empty array
- Can be a mixture of positive and negative numbers

## Algorithm
- loop through the given array and add the max value from either of 2 adjacent numbers to the intial value
- Add the max of maxEnding and res to assign it to "res"
- loop through until the last element of array and return "res" varibale

# Sum Of Two Items In An Array

## *USEAGE*: to find the subarray of length 2 such that their sum is equal to a constant

### test cases
- Not take any positive number
- Not take any zeroes
- Always result a single array with length 2
- Need Not be strict on duplicate elements