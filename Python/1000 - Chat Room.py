word = input()

hello = ['h', 'e', 'l', 'l', 'o']
counter = 0

for letter in word:
    if hello[counter] == letter:
        counter += 1

if counter == 5:
    print("YES")
else:
    print("NO")


# if 'h' in word:
#     f_word = word[word.index('h') + 1:]
#
#     if 'e' in f_word:
#         f_word = f_word[f_word.index('e') + 1:]
#
#         if 'l' in f_word:
#             f_word = f_word[f_word.index('l') + 1:]
#
#             if 'l' in f_word:
#                 f_word = f_word[f_word.index('l') + 1:]
#
#                 if 'o' in f_word:
#                     print("YES")
#                 else:
#                     print("NO")
#             else:
#                 print("NO")
#         else:
#             print("NO")
#     else:
#         print("NO")
# else:
#     print("NO")