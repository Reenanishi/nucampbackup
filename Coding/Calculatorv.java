import java.util.Scanner;

public class Calculatorv {
    public static void main(final String[] args) {
        int a; // number 1
        int b; // number 2
        String d; // operator "+" "-"....
        Scanner input = new Scanner(System.in);



        while (true){
        // System.out.println("Choose option below");
        // System.out.println("1 to add");
        // System.out.println("2 to subtract");
        // int option = input.nextInt();

        System.out.println("enter the first number ");
        a = input.nextInt();

        System.out.println("enter the second number ");
        b = input.nextInt();
       
    //    if (option == 1){
    //        int sum = a+b;
    //     String output = "Sum of " + a + " and " + b + " = " + sum;
    //     System.out.println(output);
    //    }

        
        System.out.println("enter operators");

        String operator = input.next();

        if (operator.equals("+")) {
            System.out.println("answer is " + (a + b));
        }
        if (operator.equals("-")) {
            System.out.println("answer is" + (a - b)); 
        }
        if (operator.equals("/")) {
            System.out.println("answer is" + (a /b)); 
        }

        if (operator.equals("*")) {
            System.out.println("answer is" + (a*b )); 
        }

        if (operator.equals("%")){
            System.out.println("answer is" + (a%b));
        }



        System.out.println("do you want to continue y/n ? ");
        String cont = input.next();
        if(cont.equals("n")){
            break;
        }

    }   


    }

}
