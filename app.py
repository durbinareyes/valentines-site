from flask import Flask, render_template

app = Flask(__name__)

data = {
    "title": "Will You Be My Valentine? ❤️",
    "question": "Hey Heyzel, will you be my Valentine?",
    "yes_text": "YES ❤️",
    "no_text": "I need to think 👀"
}

@app.route("/")
def home():
    return render_template("index.html", data=data)

if __name__ == "__main__":
    app.run(debug=True)
