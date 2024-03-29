#!/usr/bin/python3
from flask import Flask, request, render_template
import json
import io
import logging
import chess.pgn


app = Flask(__name__)

app.config.from_file("./config.json", json.load)
engine_path = app.config["ENGINE_PATH"]
logging.basicConfig(level=logging.DEBUG)


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

    engine = chess.engine.SimpleEngine.popen_uci(engine_path)

    info = engine.analyse(board, chess.engine.Limit(time=.1))

    engine.quit()

    print(info["score"])
    info["best"] = info["pv"][0].uci()
    info["pv"] = [str(each) for each in info["pv"]]

    info["score"] = str(info["score"].pov(not info["score"].turn))

    return info

if __name__=="__main__":
    app.run(debug=True, port=3000)
