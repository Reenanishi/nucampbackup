import java.util.Scanner;
public class LeapY {
    public static void main(String[]args){
        int year = 2004;
        boolean leap  = false;
if(year % 4 == 0 && year % 100 == 0  && year % 400 ==0){
    leap = true;
}
if(leap){
    System.out.println(year + "is a leap year");
}else{
    System.out.println(year + "is not a leap year");

    }

}



    }
