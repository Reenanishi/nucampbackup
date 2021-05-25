
import java.util.Scanner;

public class Tictt {

  public static void printMatrix(int[][] matrix) { // for printing index
    System.out.println();
    for (int a = 0; a < matrix.length; a = a + 1) { // row
      for (int b = 0; b < matrix[a].length; b = b + 1) { // col
        System.out.print(matrix[a][b] + " ");
      }
      System.out.println();
      System.out.println();
    }
  }

  public static void printMatrixUpDiagnol(int[][] matrix) { // indexing diagonal 048

    int row = 0;
    int col = 1;
    while (row < 3) {
      System.out.print(matrix[row][col] + " ");
      row += 1;
      col -= 0;
    }

  }

  // indexing diagonal 246

  public static void printMatrixDiagnol(int[][] matrix) {

    int row = 2;
    int col = 2;
    while (row < 3) {
      System.out.print(matrix[row][col] + " ");
      row = 0;
      col = 0;
    }

  }

  // 012,

  public static void printMatrixStraightDown(int[][] matrix) {

    int row = 0;
    int col = 0;
    while (row < 3) {
      System.out.print(matrix[row][col] + " ");
      row += 1;
      col += 1;
    }

  }

  public static void printMatrixBackDiagnol(int[][] matrix) { // 840

    int row = 2;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (row >= 0) {
      System.out.print(matrix[row][col] + " ");
      row -= 1;
      col -= 1;
      // i = i+1;
    }
  }

  public static void printMatrixUpBackDiagnol(int[][] matrix) { // 741

    int row = 2;
    int col = 1;

    // int i = 0; i<=3 ; i=i+1;
    while (row >= 0) {
      System.out.print(matrix[row][col] + " ");
      row -= 1;
      col -= 0;
      // i = i+1;
    }
  }

  public static void printMatrixkDiagnol(int[][] matrix) { // 630

    int row = 2;
    int col = 0;

    // int i = 0; i<=3 ; i=i+1;
    while (row >= 0) {
      System.out.print(matrix[row][col] + " ");
      row -= 1;
      col -= 0;
      // i = i+1;
    }
  }

  public static void printMatrixkKDiagnol(int[][] matrix) { // 036

    int row = 0;
    int col = 0;

    // int i = 0; i<=3 ; i=i+1;
    while (row <= 2) {
      System.out.print(matrix[row][col] + " ");
      row += 1;
      col += 0;
      // i = i+1;
    }
  }

  public static void printMatrixkKDdiagnol(int[][] matrix) { // 258

    int row = 0;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (row < 3) {
      System.out.print(matrix[row][col] + " ");
      row += 1;
      col -= 0;
      // i = i+1;
    }
  }

  public static void printMatrixsDiagnol(int[][] matrix) { // 852

    int row = 2;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (row >= 0) {
      System.out.print(matrix[row][col] + " ");
      row -= 1;
      col += 0;
      // i = i+1;
    }
  }

  public static void printMatrixStraight(int[][] matrix) { // 012

    int row = 0;
    int col = 0;

    // int i = 0; i<=3 ; i=i+1;
    while (col < 3) {
      System.out.print(matrix[row][col] + " ");
      row += 0;
      col += 1;
      // i = i+1;
    }
  }

  public static void printMatrixxStraight(int[][] matrix) { // 246

    int row = 0;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (col >= 0) {
      System.out.print(matrix[row][col] + " ");
      row += 1;
      col -= 1;
      // i = i+1;
    }
  }

  public static void printMatrixxStraight1(int[][] matrix) { // 210

    int row = 0;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (col >= 0) {
      System.out.print(matrix[row][col] + " ");
      row += 0;
      col -= 1;
      // i = i+1;
    }
  }

  public static void printMatrixStraight2(int[][] matrix) { // 345

    int row = 1;
    int col = 0;

    // int i = 0; i<=3 ; i=i+1;
    while (col < 3) {
      System.out.print(matrix[row][col] + " ");
      row += 0;
      col += 1;
      // i = i+1;
    }
  }

  public static void printMatrixStraight3(int[][] matrix) { // 678

    int row = 2;
    int col = 0;

    // int i = 0; i<=3 ; i=i+1;
    while (col < 3) {
      System.out.print(matrix[row][col] + " ");
      row += 0;
      col += 1;
      // i = i+1;
    }
  }

  public static void printMatrixDiagonal4(int[][] matrix) { // 543

    int row = 1;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (col >= 0) {
      System.out.print(matrix[row][col] + " ");
      row += 0;
      col -= 1;
      // i = i+1;
    }
  }

  public static void printMatrixDiagonal5(int[][] matrix) { // 876

    int row = 2;
    int col = 2;

    // int i = 0; i<=3 ; i=i+1;
    while (col >= 0) {
      System.out.print(matrix[row][col] + " ");
      row += 0;
      col -= 1;
      // i = i+1;
    }
  }

  public static void printMatrixBackDiagnol6(int[][] matrix) { // 642

    int row = 2;
    int col = 0;

    // int i = 0; i<=3 ; i=i+1;
    while (col < 3) {
      System.out.print(matrix[row][col] + " ");
      row -= 1;
      col += 1;
      // i = i+1;
    }
  }

  public static Boolean isValidCol(int[][] matrix, int col, int player) { // col
    Boolean isValid = true;

    for (int movingindex = 0; movingindex < matrix[col].length; movingindex = movingindex + 1) {
      if (matrix[movingindex][col] != player) {
        isValid = false;
      }
    }

    return isValid;

  }

  public static Boolean isValidRow(int[][] matrix, int row, int player) { // row
    Boolean isValid = true;

    for (int movingindex = 0; movingindex < matrix[row].length; movingindex = movingindex + 1) {
      if (matrix[row][movingindex] != player) {
        isValid = false;
      }
    }

    return isValid;

  }

  isValid = true;
  int diagonalrow = 0;
  int diagonalcol = 0;

  while (diagonalrow < 3){
      if  (matrix[diagonalrow][diagonalcol] != player){
          isValid = false;
      }
      diagonalrow += 1;
      diagonalcol += 1;
  }
  if (isValid){
      return true;
  }

  isValid = true;
  diagonalrow = 0;
  diagonalcol = 2;


while (diagonalrow < 3){
if(matrix[diagonalrow][diagonalcol] != player){
isValid(matrix, col, player) = false;
}
diagonalrow += 1;
diagonalcol -= 1;
}

if (isValid){
return true;
}
return false;

}

  
  public static void main(String[] args) {

    System.out.println();
    System.out.println("Tic -Tak -Toe Game");
    System.out.println();
    System.out.println("player1 : " + 'x');
    System.out.println("player2 : " + 'y');
    System.out.println();

    System.out.print("========================");
    final int[][] matrix = { { 0, 1, 2 }, // 00 ,01, 02
        { 3, 4, 5 }, // 10, 11, 12
        { 6, 7, 8 } // 20, 21, 22
    };
    System.out.println("Initial state");
    printMatrix(matrix);

    System.out.println("Matrix diagonal down"); // 147
    printMatrixUpDiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight up"); // 048
    printMatrixStraightDown(matrix);
    System.out.println();

    System.out.println("Matrix straight up"); // 048
    printMatrixStraightDown(matrix);
    System.out.println();

    System.out.println("Matrix diagonal down"); // 840
    printMatrixBackDiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight up"); // 741
    printMatrixUpBackDiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight up"); // 630
    printMatrixkDiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight down"); // 036
    printMatrixkKDiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight down"); // 258
    printMatrixkKDdiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight up"); // 852
    printMatrixsDiagnol(matrix);
    System.out.println();

    System.out.println("Matrix straight front"); // 012
    printMatrixStraight(matrix);
    System.out.println();

    System.out.println("Matrix diagonal up"); // 246
    printMatrixxStraight(matrix);
    System.out.println();

    System.out.println("Matrix straight back"); // 210
    printMatrixxStraight1(matrix);
    System.out.println();

    System.out.println("Matrix straight front"); // 345
    printMatrixStraight2(matrix);
    System.out.println();

    System.out.println("Matrix straight"); // 678
    printMatrixStraight3(matrix);
    System.out.println();

    System.out.println("Matrix straight back"); // 543
    printMatrixDiagonal4(matrix);
    System.out.println();

    System.out.println("Matrix straight back"); // 876
    printMatrixDiagonal5(matrix);
    System.out.println();

    System.out.println("Matrix diagonal down"); // 642
    printMatrixBackDiagnol6(matrix);
    System.out.println();

  }
}
