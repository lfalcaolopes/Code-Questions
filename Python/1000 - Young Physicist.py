num_vectors = int(input())

sum_x = 0
sum_y = 0
sum_z = 0

for _ in range(num_vectors):
    x, y, z = map(int, input().split())

    sum_x += x
    sum_y += y
    sum_z += z

if sum_x == sum_z == sum_y == 0:
    print("YES")
else:
    print("NO")









