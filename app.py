#!/usr/bin/python3
from flask import Flask, request, render_template
import io
import chess.pgn

app = Flask(__name__)

@app.route("/hello")
def hello_world():
    return "<p>Hello World!</p>"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/play", methods=["POST"])
def play():
    #pgn = "1. e4 d6 2. c3 b6 3. g3"
    pgn = request.form.get("pgn")

    # read game moves from PGN
    game = chess.pgn.read_game(io.StringIO(pgn))    
    # init board
    board = game.board()
    
    # loop over moves in game
    for move in game.mainline_moves():
        # make move on chess board
        board.push(move)

    engine = chess.engine.SimpleEngine.popen_uci("stockfish")

    info = engine.analyse(board, chess.engine.Limit(time=.1))

    engine.quit()

    info["pv"] = info["pv"][0].uci()
    print(info["score"])

    info["score"] = str(info["score"].pov(not info["score"].turn))

    return info

if __name__=="__main__":
    app.run(debug=True, port=3000)
