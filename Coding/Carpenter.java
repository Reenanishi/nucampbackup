public class Carpenter{      //CLASS
    String name = "Shyam";
    Integer zipcode;              //INSTANCE VARIABLE
    static Integer id=5;           // CLASS VARIABLE
    void drilling() {
    String drill = "pin";     //  local variable
        System.out.println(drill);

    }
    
    public static void main(String[] args) {
        System.out.println("i am in");
        Carpenter zzz=new Carpenter();     // OBJECT
        System.out.println(zzz.name);
        zzz.name="rat";   // Assign LHS to RHS with same data type string
        System.out.println(zzz.name);
        zzz.drilling();

    }


/* xyz
*/
}

