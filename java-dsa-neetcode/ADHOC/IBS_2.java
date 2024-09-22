public class IBS_2 {

    public static String[][] map_arr = {

            { "a", "b", "c" },
            { "d", "e", "f" },
            { "g", "h", "i" },
            { "j", "k", "l" },
            { "m", "n", "o" },
            { "p", "q", "r" },
            { "s", "t", "u" },
            { "v", "w", "z" },
            { "y", "z", " " },

    };

    public static String input = "88339";
    // ani -> "155333";
    // why -> "839";

    public static void main(String... args) {

        System.out.println(numberToAlphaOnKeyPad(input));

    }

    private static String numberToAlphaOnKeyPad(String input) {

        String[] input_arr = input.split("");

        int i = 0;
        StringBuilder sb = new StringBuilder();

        while (i < input_arr.length -1) {
            String ch = "";

            // if (input_arr[i] == input_arr[i + 1] && input_arr[i] == input_arr[i + 2]) {
            // ch = map_arr[Integer.parseInt(input_arr[i]) - 1][0];
            // } else if (input_arr[i] == input_arr[i + 1] && input_arr[i] != input_arr[i +
            // 2]) {
            // ch = map_arr[Integer.parseInt(input_arr[i]) - 1][0];
            // } else if (input_arr[i] != input_arr[i + 1] && input_arr[i] == input_arr[i +
            // 2]) {
            // ch = map_arr[Integer.parseInt(input_arr[i]) - 1][1];
            // ++i;
            // } else if (input_arr[i] != input_arr[i + 1] && input_arr[i] != input_arr[i +
            // 2]) {
            // ch = map_arr[Integer.parseInt(input_arr[i]) - 1][2];
            // ++i; ++i;
            // } else {
            // ch = "";
            // }

            if (input_arr[i].equals(input_arr[i + 1]) && input_arr[i].equals(input_arr[i + 2])) {
                ch = map_arr[Integer.parseInt(input_arr[i]) - 1][2];
                ++i; ++i;
            } else if (input_arr[i].equals(input_arr[i + 1]) && !input_arr[i].equals(input_arr[i + 2])) {
                ch = map_arr[Integer.parseInt(input_arr[i]) - 1][1];
                ++i;
            } else if (!input_arr[i].equals(input_arr[i + 1]) && input_arr[i].equals(input_arr[i + 2])) {
                ch = map_arr[Integer.parseInt(input_arr[i]) - 1][0];
            } else if (!input_arr[i].equals(input_arr[i + 1]) && !input_arr[i].equals(input_arr[i + 2])) {
                ch = map_arr[Integer.parseInt(input_arr[i]) - 1][0];
            }

            sb.append(ch);
            // console.log("index", i, "charcacter", ch, "answer", answer);

            ++i;

        }
        return sb.toString();

    }// end of numberToAlphaOnKeyPad
}
