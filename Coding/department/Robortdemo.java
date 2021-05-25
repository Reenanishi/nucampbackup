class Robotdemo {
  
	public static void main(String[] args) {   
    SimpleRobot r = new SimpleRobot();
    
    r.forward();
    r.right();
    r.forward();
    r.left();
    r.right();
    r.forward();
    // Add your if-statement here:
    if(r.blocked()) {
      System.out.println("I see a wall!");
    }
  }
}
