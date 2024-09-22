import java.util.Optional;

public class Problem {

    public static String numString = "2214";
    public static long noOfPermutations = 0l;

    public static void main(String[] args) {

        boolean flag = getNumberOfPatterns(numString).isPresent();

        noOfPermutations = 0l;

        if (flag) {
            Long value = getNumberOfPatterns(numString).get();
            System.out.println(value);
        }

    }

    private static Optional<Long> getNumberOfPatterns(String numString) {

        StringBuilder sb = new StringBuilder(numString);

        for (int count = 0; count < numString.length() - 1; count++) {
            // get two integers at same time
            String i = sb.substring(count, count + 2);
            Integer value = Integer.valueOf(i);

            // System.out.println(value);

            if (value >= 26) {
                noOfPermutations++;
            } else {
                noOfPermutations += 2;
            }
        }

        return Optional.of(++noOfPermutations);
    }

}
