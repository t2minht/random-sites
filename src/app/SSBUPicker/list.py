import sys
input = sys.stdin.readline().strip()
command = input.split("**")

for charRaw in open("./char.txt"):
    char = charRaw.strip()
    output = ""
    for i in range(len(command)-1):
        output = output + command[0] + char
    output = output + command[len(command)-1]

    print(output)
    