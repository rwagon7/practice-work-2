import java.util.Arrays;
import java.util.Comparator;

class PrefixSum {
    // global input
    public static String[] names; // {"why", "what", "whom"} //{"flight", "flower", "fly"};

    public static void main(String[] args) {

        // arrays sort based on string length
        Arrays.sort(names, Comparator.comparing(String::length));
        System.out.println(Arrays.toString(names));
        // passing the same to the findPrefixSum method...
        int value = findPrefixSum(names, names[names.length - 1]);
        // printing output
        System.out.println(value);
    }

    private static Integer findPrefixSum(String arr[], String longestWord) {
        // Initalize a array
        char[] input = longestWord.toCharArray();
        int[] target = new int[arr.length];
        Character value;
        //resetting counter
        int counter = 0;
        int position = 0;
        // filling with deafult value
        Arrays.fill(target, 0);
        target[target.length - 1] = longestWord.length() - 1;
        // loop
        while (counter < arr.length -1) {
            while (position < arr[counter].length()) {
                value = position < names[counter].length() && input[position] == arr[counter].charAt(position) ? input[position] : null;
                if (value != null) {
                    target[counter]++;
                }
                position++;
            }
            position = 0;
            counter++;
        }
        // Output view
        Arrays.sort(target);
        System.out.println(Arrays.toString(target));

        return target[0];
    }
}
