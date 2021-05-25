import java.util.ArrayList;

public class TwoSum {
    public static void main(String[] args) {
        int[] array = { 2, 3, 4, 5, 6 };
        int target = 7;

        ArrayList<String> result = new ArrayList<String>();

        for (int i = 0; i <= 4; i++) {
            for (int j = i + 1; j <= 4; j++) {
                if (array[i] + array[j] == target) {
                    String result2 = " " + array[i] + " " + array[j];
                    result.add(result2);
                    // System.out.println(result);
                }

            }
        }


        // print result
        for(int i=0; i < result.size(); i++){
            System.out.println(result.get(i));
        }

    }


}