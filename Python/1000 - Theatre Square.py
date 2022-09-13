import math

m, n, a = map(int, input().split())

floor_x = math.ceil(m / a)
floor_y = math.ceil(n / a)

print(floor_y * floor_x)
