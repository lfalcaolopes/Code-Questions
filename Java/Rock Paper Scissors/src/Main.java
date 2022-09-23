import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        String[] moves = {"rock", "paper", "scissors"};


        String pcMove = moves[random.nextInt(3)];

        System.out.println("pcMove = " + pcMove);

        String myMove = sc.nextLine();

        if (myMove.equals(pcMove)) {
            System.out.println("Draw");
        } else if (myMove.equals("rock")) {
            if (pcMove.equals("scissors")) {
                System.out.println("You win");
            } else {
                System.out.println("PC Wins");
            }
        } else if (myMove.equals("paper")) {
            if (pcMove.equals("rock")) {
                System.out.println("You win");
            } else {
                System.out.println("PC Wins");
            }
        } else if (myMove.equals("scissors")) {
            if (pcMove.equals("paper")) {
                System.out.println("You win");
            } else {
                System.out.println("PC Wins");
            }
        }
    }
}