// public class Problem2Method2 {

//     public static String[][] map_arr = {

//             { "a", "b", "c" },
//             { "d", "e", "f" },
//             { "g", "h", "i" },
//             { "j", "k", "l" },
//             { "m", "n", "o" },
//             { "p", "q", "r" },
//             { "s", "t", "u" },
//             { "v", "w", "z" },
//             { "y", "z", " " },

//     };

//     public static String input = "155333";

//     // public static Hashtable table;

//     public static void main(String[] args) {
//         // getting int array
//         int[] int_arr = getArray();
//         // passing it to logic block
//         String answer = logicBlock(int_arr);
//         // printing answer
//         System.out.println(answer);
//     }

//     private static int[] getArray() {
//         // initializing
//         String[] string_arr = input.split("");
//         // int array
//         int[] int_arr = new int[string_arr.length];
//         // looping
//         for (int i = 0; i < string_arr.length; i++) {
//             int_arr[i] = Integer.parseInt(string_arr[i]);
//         }
//         // returning array
//         return int_arr;
//     }// end of method getArray

//     // private static Hashtable<Integer, Integer> getLookUpTable() {
//     // // table.put(input, STR);
//     // return table;
//     // }

//     private static Integer repeatCount(int x) {

//         if (i1 == i2 && i2 == i3) {
//             return 2;
//         } else if (i1 == i2 && i2 != i3) {
//             return 1;
//         } else if (i1 != i2 && i2 == i3) {
//             return 0;
//         } else if (i1 != i2 && i2 != i3) {
//             return 0;
//         }

//         return 0;
//     }

//     private static String logicBlock(int[] int_arr) {
//         // intializing variables
//         int i = 0;
//         int repeat = 0;
//         StringBuilder sb = new StringBuilder();
//         // looping over
//         while (i < int_arr.length) {
//             // inside while loop
//             System.out.println("Inside my loop...!");
//             // passing the same to method repeatCount
//             repeat = repeatCount(i);
//             sb.append(map_arr[i][repeat]);
//             i++;
//         }
//         // return the builder
//         return sb.toString();
//     }

// }
