#!/usr/bin/python3
import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(("127.0.0.1", 3030))

    while True:
        x = input().strip()
        if x=="uci":
            print("id name friedfish")
            print("id author foderking")
            print("uciok")
        elif x=="ucinewgame":
            pass
        elif x=="isready":
            print("readyok")
        elif x.startswith("position"):
            s.sendall(bytes(x + "\n", "utf-8"))
        else:
            s.sendall(bytes(x + "\n", "utf-8"))
            print(s.recv(1024))
