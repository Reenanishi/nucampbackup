public class Descending {
    public static void main(String[] args) {
        int[] myList = { 2, 4, 6, 8, 10 };

        // for (int index = 0; index < myList.length; index = index + 1)
        // ;
        System.out.println("Print array in asc order");
        for (int index = 0; index < 5; index = index + 1) {
            System.out.println(String.format("Index= %d value= %d", index, myList[index]));
            // System.out.println(myList[index] + " ");

        }
        System.out.println("##########################");
        System.out.println("Print array in reverse order");
        for (int index = 4; index > 0; index = index - 1) {
            System.out.println(String.format("Index= %d value= %d", index, myList[index]));

        }
        for (int index = 0; index < 5; index = index + 1) {
           myList[index] = myList[index] * 2;
         

        }
         
        for (int index = 0; index < 5; index = index + 1) {
            System.out.println(String.format("Index= %d value= %d", index, myList[index]));

        }



    }

}