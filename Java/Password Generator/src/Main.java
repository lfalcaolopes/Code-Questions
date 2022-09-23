import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
import java.util.Random;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args){
        char[] letters = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
        char[] numbers = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
        char[] symbols = {'!', '#', '$', '%', '&', '(', ')', '*', '+'}; //Declaração de array estática

        Scanner sc = new Scanner(System.in);
        Random random = new Random();//Criação do random module
        System.out.println("How many letters do you want");
        int letterAmount = sc.nextInt();
        System.out.println("How many numbers do you want");
        int numAmount = sc.nextInt();
        System.out.println("How many symbols do you want");
        int symAmount = sc.nextInt();

        ArrayList<Character> passwordList = new ArrayList<Character>();//Declaração de array fluida

        for(int i=0; i<letterAmount; i++) {
            passwordList.add(letters[random.nextInt(letters.length)]);
        }
        for(int i=0; i<numAmount; i++) {
            passwordList.add(numbers[random.nextInt(numbers.length)]);
        }
        for(int i=0; i<symAmount; i++) {
            passwordList.add(symbols[random.nextInt(symbols.length)]);
        }

        Collections.shuffle(passwordList);//Array shuffle

        String password = passwordList.stream().map(Object::toString).collect(Collectors.joining(""));//Tranformando array em string com delimitador

        System.out.println("password = " + password);
    }
}
