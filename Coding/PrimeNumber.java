public class PrimeNumber{

   public static boolean isPrime(int num){      

    boolean isPrimeNumber = true;

    for(int j=2; j < num ; j++){
        
        if (num % j == 0){
            isPrimeNumber = false;
            break;
        }
    }

    return isPrimeNumber;
  }

public static void main(String[] args){
    int i;
    int num =1;
    int max = 100;
    


    for ( i = 1; i <= max; i++){
        boolean isprime = isPrime(i);
       

        if(isprime)
             System.out.println(i);
    }
}

}




