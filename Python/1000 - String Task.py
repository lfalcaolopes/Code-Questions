word = input().lower()

vowels = ["a", "e", "i", "o", "u", "y"]
result = []

for letter in vowels:
    word = word.replace(letter, "")


for letter in word:
    result.append(f".{letter}")

print("".join(result))
