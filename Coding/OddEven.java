import java.util.Scanner;

public class OddEven {
    public static void main(String[] args) {

        int num;
        System.out.println("Enter the Integer number");

        Scanner input = new Scanner(System.in);
        num = input.nextInt();

        if (num % 2 == 0)
            System.out.println("Enter number is Even");
        else
            System.out.println("Enter number is Odd");
    }

}
