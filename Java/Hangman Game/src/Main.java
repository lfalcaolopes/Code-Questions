import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        ArrayList<String> letterGuesses = new ArrayList<String>();
        String[] words = {"monitor", "program", "application", "keyboard", "javascript", "gaming", "network"};
        int life = 5;
        boolean stillPlaying = true;

        String[] letters = words[random.nextInt(words.length)].split("");

        while (life > 0 && stillPlaying) {
            ArrayList<Integer> indexes = new ArrayList<Integer>();

            System.out.println("Guess a Letter:");
            String guess = sc.nextLine();

            for (int i = 0; i< letters.length; i++) {
                if(letterGuesses.size()<letters.length){
                    letterGuesses.add("_");
                }
                if (letters[i].equals(guess)) {
                    indexes.add(i);
                }
            }

            if (indexes.size()!=0) {
                for (int index : indexes) {
                    letterGuesses.set(index, guess);//Alterar o valor de uma celula da ArrayList
                }
                stillPlaying = letterGuesses.contains("_");//Checar se contém um elemento na ArrayList
                System.out.println("\n"+String.join(" ", letterGuesses)+"\n");
            }
            else{
                life--;
                System.out.printf("You guessed %s. That is not in the word, lost a life. You have %s tries%n", guess, life);
                System.out.println("\n"+String.join(" ", letterGuesses)+"\n");
            }
        }
        if (!stillPlaying) {
            System.out.println("You won! To play again reset the code");
        } else {
            System.out.println("You lost. Try next time");
        }
    }
}












