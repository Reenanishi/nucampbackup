public class Try {
    public static void main(String[] args) {
        /*
         * int[] myNumbers = { 3, 6, 9 }; 
         * System.out.println(myNumbers[12]);
         */

        try {

            int a= 1;
            a = a/1;
            // int[] myNumbers = { 3, 6, 9 };
            // System.out.println(myNumbers[12]);
        } 
        catch (RuntimeException e){
            System.out.println("Something went wrong.");
            return;
        }finally {
            System.out.println("in finally");

        }
        System.out.println("after finnaly ");

    }
}   