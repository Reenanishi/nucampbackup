package department;

public class Student {
    int id;
    String name;
    String country;
    int age;
    double grad;
    
    Student( int id ,String name, String country ,int age,double grad){
        this.id = id;
        this.name = name;
        this.country = country;
        this.age = age;
        this.grad = grad;
    }
     
    /* printing name */
    public void printName() {
        System.out.println("Statement 4");
        System.out.println("id="+id);
        System.out.println("name="+name);
        System.out.println("country="+country);
        System.out.println("age ="+ age);
        System.out.println(" grad ="+ grad );

        System.out.println("Statement 5");
        
    }

}


