import java.util.ArrayList;

public class ThreeSum {
    public static void main(String[] args) {
        int[] array = { 13, 15, 22, 36, 27, };
        int target = 37;

        ArrayList<String> result = new ArrayList<String>();

        for (int i = 0; i <= 4; i++) {
            for (int j = i + 1; j <= 4; j++) {
                if (array[i] + array[j] == target) {
                    String result2 = " " + array[i] + " " + array[j];
                    result.add(result2);
                    //System.out.println(result);

                }

            }
        }

        for (int i = 0; i < result.size(); i++) {
            System.out.println(result.get(i));
        }

    }
}

//ArrayList<String> result = new ArrayList<String>();
