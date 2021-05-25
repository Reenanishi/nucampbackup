import java.util.Scanner;

public class SimpleIntrest {
    public static void main (String[] Args){
    int p ;
    Scanner scan = new Scanner(System.in);
    System.out.println("Please enter your principal");
    p = scan.nextInt();
    //p =2000;
    System.out.println("Please enter your rate");
    int r = scan.nextInt();
    //int r = 8;
    System.out.println("Please enter your time");
    int t = scan.nextInt();
    //int t = 3;
    
     double si = ((p*r*t)/100);
    
    System.out.println("principal");
    System.out.println(p);
    System.out.println("rate");
    System.out.println(r);
    System.out.println("time");
    System.out.println(t);
    System.out.println(si);
    
    
    

    }




}