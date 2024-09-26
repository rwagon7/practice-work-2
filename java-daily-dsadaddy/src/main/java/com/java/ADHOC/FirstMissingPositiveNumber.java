import java.util.Arrays;
import java.util.Optional;

class FirstMissingPositiveNumber {

    // Problem statement
    // create a method that returns first missing positive value

    public static void main(String... args) {
        System.out.println(findFirstLeastPositiveNumber().isPresent() ? findFirstLeastPositiveNumber().get() : Integer.MIN_VALUE);
    }

    private static Optional<Integer> findFirstLeastPositiveNumber() {

        // created an array
        int[] arr = { 7, -3, 4, 3, -2, 1 };
        // init value
        int j = 0;
        // sorted an array
        Arrays.sort(arr);

        System.out.println(Arrays.toString(arr));
        // value of checkdiff
        int checkdiff = 0;
        //init value of flag
        boolean flag = false;

        for (int i = 1; i <= arr.length; i++) {
            if ((arr[i] < 0 || arr[i] == 0) && flag) {
                continue;
            } else {
                flag = true;
                checkdiff = i;
                break;
            }
        }

        //System.out.println(checkdiff);

        for (int i = checkdiff + 1; i < arr.length; i++) {
            j++;
            if (j != arr[i]) {
             //System.out.println(j + " " + arr[i]);
                return Optional.of(j);
            }
        }

        return Optional.empty();
    }
}
