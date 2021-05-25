import java.util.Scanner;

public class TicTakToe {

    public static Boolean isWinner(int[][] matrix, int row, int col,int player){
        Boolean isWinner = true;
        // check col
        for (int movingindex = 0; movingindex < matrix[col].length; movingindex = movingindex+1) {
            if  (matrix[movingindex][col] != player){
                isWinner = false;
            }    
        }
        if (isWinner){
            return true;
        }

        ////// Check row
        isWinner = true;
        
        // check col
        for (int movingindex = 0; movingindex < matrix[row].length; movingindex = movingindex+1) {
            if  (matrix[movingindex][row] != player){
                isWinner = false;
            }    
        }

        if (isWinner){
            return true;
        }

         ////// Check diag down

        isWinner = true;
        int drow = 0;
        int dcol = 0;
    
        while (drow < 3){
            if  (matrix[drow][dcol] != player){
                isWinner = false;
            }
            drow += 1;
            dcol += 1;
        }
        if (isWinner){
            return true;
        }

                 ////// Check diag up

                 isWinner = true;
                  drow = 0;
                  dcol = 2;

        
        while (drow < 3){
            if(matrix[drow][dcol] != player){
                isWinner = false;
            }
            drow += 1;
            dcol -= 1;
        }

        if (isWinner){
            return true;
        }
        return false;

    }




    public static void printMatrix(int[][] matrix){
        for (int a = 0; a < matrix.length; a =a+1) {         
            for (int b = 0; b < matrix[a].length; b = b+1) {   
               System.out.print(matrix[a][b] + " ");
            }
            System.out.println(); 
    
        }
    }


    public static void main(String[]args){
icTokToe [][] game =  new TicTokToe [3][3];
    

    for (int index a = 0; index a < 3; index a =index a +1);
        for (int  index b  = 0; index b < 3; index b= index b+1) ;
           row [a][b] = colimn++;*/

    Scanner input = new Scanner(System.in);
    System.out.println("Tic -Tak -Toe");    

    // int box0 = 0;
    // int box1 = 1;
    // int box2 = 2;   
    // int box3 = 3;
    // int box4 = 4;
    // int box5 = 5;
    // int box6 = 6;
    // int box7 = 7;
    // int box8 = 8;      

    
    // for (int index = 0; index < 9; index = index+1) {
    // System.out.println(index);    
        

    // }
    
    System.out.println("========================");
    final int[][] matrix = {
        { 0, 0, 0 },  //00 ,01, 02
        { 0, 0, 0 },  //10, 11, 12
        { 0, 0, 0 }   //20, 21, 22
     };
    //  for (int a = 0; a < matrix.length; a =a+1) {         
    //     for (int b = 0; b < matrix[a].length; b = b+1) {   
    //        System.out.print(matrix[a][b] + " ");
    //     }
    //     System.out.println(); 

    // }

    System.out.println("=============================");
    printMatrix(matrix);
    System.out.println("=============================");
     
    int move = 1;
    Boolean isPlayer = true;

    while (1 <= 9){
           int playerval = 0;
          if (isPlayer == true){
            System.out.println("PLayer 1 chance");
            playerval = -1;
          }else{
            System.out.println("PLayer 2 chance");
             playerval = 1;
          }


          System.out.println("enter the first col ");
          int usercol  = input.nextInt();
          usercol -= 1;
  
          System.out.println("enter the second row ");        
          int userrow = input.nextInt();
          userrow -= 1;

          matrix[userrow][usercol] = playerval;
        
          System.out.println("=============================");
          printMatrix(matrix);
          System.out.println("=============================");

          //select player one pos ... get int row and int col
         if (isWinner(matrix, userrow, usercol, playerval)){
            if (isPlayer == true){
            System.out.println("Player 1 is winner");
            }else{
                System.out.println("Player 2 is winner");

            }
            break;
         }
          isPlayer = !isPlayer;
    }
}
}
