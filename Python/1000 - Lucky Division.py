import itertools


def get_lucky(limit):
    core = ["4", "7"]
    lucky_number = []

    stuff = core * len(str(limit))

    for L in range(1, len(stuff)+1):
        for subset in itertools.combinations(stuff, L):
            num = int("".join(subset))
            lucky_number.append(num)

    # lucky_number = list(dict.fromkeys(lucky_number))
    lucky_number = set(lucky_number)

    lucky_number = [item for item in lucky_number if item <= limit]

    return lucky_number


num = int(input())

lucky_numbers = get_lucky(1000)
# lucky_numbers = [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777]
is_almost_lucky = False

for lucky in lucky_numbers:
    if num % lucky == 0:
        is_almost_lucky = True
        break

if is_almost_lucky:
    print("YES")
else:
    print("NO")
