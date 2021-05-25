import java.util.Scanner;

public class TTT {
  public static void printmatrix(int[][] matrix) {
    for (int a = 0; a < matrix.length; a = a + 1) {
      for (int b = 0; b < matrix[a].length; b = b + 1) {
        System.out.print(matrix[a][b] + " ");
      }
      System.out.println();
    }
  }



  public static void printMatrixUpDiagnol(int[][] matrix) {
    
     int row = 0;
     int col = 0;
     while (row < 3)  {
      System.out.print(matrix[row][col] + " ");
        row += 1;
        col += 1;
     }
  
  }

  public static void printMatrixUpDiagnol(int[][] matrix) {
    
    int row = 0;
    int col = 0;
    while (row > 0)  {
     System.out.print(matrix[col][row] + " ");
       row += 1;
       col += 1;
    }
 
 }





  public static void printMatrixrow(int[][] matrix) {
    
    int row = 0;
    int col = 0;
    while (row < 3) {
     System.out.print(matrix[row][col] + " ");
       row +=0;

       col +=1;
    }
  }
  
 



  public static void main(String[] args) {

    System.out.println("Tic -Tak -Toe Game");
    System.out.println();
    System.out.println("player1 : " + 'x');
    System.out.println("player2 : " + 'y');
    System.out.println();

    // TTT[][] game = new TTT[3][3];

    final int[][] matrix = { { 1, 2, 3 }, // 00 ,01, 02
        { 4, 5, 6 }, // 10, 11, 12
        { 7, 8, 9 } // 20, 21, 22
    };

    System.out.println("Initial state");

    printMatrixUpDiagno
    System.out.println("Matrix diagonal up");
    printMatrixUpDiagnol(matrix);
 
    System.out.println("Matrix diagonal down");
    printMatrixdownDiagnol(matrix);
    System.out.println();
    
    System.out.println("Matrix diagonal up");
    printMatrixUpDiagno(matrix);
    System.out.println();
    
    System.out.println(" Matrix row ");
    printMatrixrow(matrix);
    System.out.println();
    // printmatrix(col);
  
  }
  

}
