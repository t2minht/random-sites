import sys
input = sys.stdin.readline().strip()
command = input.split("**")

for charRaw in open("./char.txt"):
    char = charRaw.strip()
    print(command[0] + char + command[1])
    