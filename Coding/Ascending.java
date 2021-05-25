public class Ascending {
    public static void main(final String[] args) {
        final int[] myList = { 3, 6, 9, 12, 15 ,18};
        for (int index = 0; index < 6; index = index + 1) {
            System.out.println(String.format("Index= %d value= %d", index, myList[index]));
          
        }
        System.out.println("*********************");
        for (int index = 0; index < 6; index = index + 1) {
            myList[index] = myList[index] * 2;
            
        }

        for (int index = 0; index < 6; index = index + 1) {
                System.out.println(String.format("Index= %d value= %d", index, myList[index]));
            }
           
          /*  System.out.println("*********************");
        for (int index = 0; index < 6; index = index + 1) {
            System.out.println(String.format("Index= %d value= %d", index, myList[index +2]));
    }*/
    }
}
