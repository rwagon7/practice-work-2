import java.util.Arrays;
import java.util.Optional;

interface JollyJumpers {

    /*
     * A sequence of n numbers (n < 3000) is called Jolly Jumper if the absolute
     * values of the differences
     * between the successive elements take on all possible values from 1 through
     * n-1.
     * The definition implies that any sequence of a single integer is a jolly
     * jumper.
     * 
     * Note donot sort the input itself, sort result for ease of checking.
     */

    // static Integer value = 1423;
    // static Integer size = 5;

    static void main(String[] args) {
        // getting an sorted array
        // int[] int_arr = getNumArray(value, size);
        int[] int_arr = { 11, 7, 4, 2, 1, 6 };
        System.out.println(Arrays.toString(int_arr));
        // Calling logic block
        var answer = isAJollyJumper(int_arr, int_arr.length);
        // checking
        System.out.println(answer.get());
    }

    static int[] getNumArray(Integer value, Integer size) {
        // Intializing count value & int[] array
        var count = 0;
        int[] array = new int[size];
        // Loop
        while (count < size) {
            array[count] = value % 10;
            value = value / 10;
            count++;
        }

        return array;
    }// end of getNumArray()

    static Optional<JJ> isAJollyJumper(int[] int_arr, int size) {
        // intializing array
        int[] jj_array = new int[size - 1];
        int count = 0;
        // Looping
        while (count < size - 1) {
            jj_array[count] = Math.abs(int_arr[count + 1] - int_arr[count]);
            count++;
        }
        // printing jj Array
        System.out.println(Arrays.toString(jj_array));
        // resetting counter to Equating
        count = 1;
        // Sorting JJ_array
        Arrays.sort(jj_array);
        // checking
        while (count < size - 1) {
            if (count != jj_array[count - 1]) {
                return Optional.of(JJ.NotAJolly);
            }
            count++;
        }
        // return true if passed
        return Optional.of(JJ.Jolly);

    }

    enum JJ {
        Jolly, NotAJolly
    }
}