from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/team')
def team():
    return render_template('team.html')

# 启动应用，debug=True开启开发模式，修改代码自动刷新
if __name__ == '__main__':
    app.run(debug=True)