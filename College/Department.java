
public class Department {
   /* Student a = new Student( 1, "Adrin", "India", 22 , 55.46);    
    Student b = new Student( 2,"Angel", "Nepal", 20, 65.22);
    Student c = new Student( 3,"Dodo", "Sri Lanka", 21 , 75.46);    */
    Student[] students = new Student[3];
    public Department(){
        this.students[0] = new Student( 1, "Adrin", "India", 22 , 55.46);  
        this.students[1] = new Student( 2,"Angel", "Nepal", 20, 65.22);  
        this.students[2] = new Student( 3,"Dodo", "Sri Lanka", 21 , 75.46); 
    }
    public void printStudentName() {
        System.out.println("Statement 3");
        // this.students[0].printName();
        // this.students[1].printName();
        // this.students[2].printName();

        //  int itr; 
        // for ( itr = 0; itr <=2 ; itr = itr+1){
        //     this.students[itr].printName();
        // }

        // int itr;
        // itr = 0;
        int itr = 0;
        while (itr <=2 ){
            this.students[itr].printName();
            itr = itr+1;
        }
        System.out.println("Statement 6");
    }
}
