class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;

    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        const emailExist = this.students.filter((student) => student.email === studentToRegister.email)
        if (emailExist.length === 0) {
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
            this.students.push(studentToRegister);
        }else{
            console.log(emailExist, `This Student Already Exists!`);
        }
        return this.students;
    }
};
 const harry = new Student("harry", "harry111@.org", "Seattle");
 const webDevelopmentFundamentals = new Bootcamp("webDevelopmentFundamentals", "Beginner");
 console.log(Student);
 webDevelopmentFundamentals.registerStudent(harry);




