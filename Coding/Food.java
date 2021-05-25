 class  Food {
    public void move() {
       System.out.println("food is tasty");
    }
 }
 
 class Cake extends Food {
    public void move() {
       System.out.println("food is tasty and delicious");
    }
 }
 
 public class test Cake {
 
    public static void main(String args[]) {
       Food a = new Food();   
       Food b = new Cake();   
       a.move();   
       b.move();   
    }
   }
 