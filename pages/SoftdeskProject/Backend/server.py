from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2  # Import psycopg2 module for PostgreSQL


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

class MyServer:
    @app.route('/SignUp', methods=['POST','GET'])
    def SignUpAccount():
        try:
            if request.method == 'POST':
                requestData = request.get_json()
                #REGISTER DATA
                username = requestData.get('username', '')
                password = requestData.get('password', '')
                pin1 = requestData.get('pins1', '')
                pin2 = requestData.get('pins2', '')
                pin3 = requestData.get('pins3', '')
                pin4 = requestData.get('pins4', '')

                print("UserName: " + username)
                print("password: " + password)
                print("pins: " , pin1 , "-" , pin2 , "-" , pin3 , "-" , pin4)

                conn = psycopg2.connect(
                    dbname='clientside',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )

                cursor = conn.cursor()
                # Check user if exisiting na yung username
                cursor.execute("SELECT * FROM accounts WHERE username = %s", (username,))
                existing_user = cursor.fetchone()
                if existing_user:
                    return jsonify({'success': False, 'message': 'Username already exists'})

                # If username not exisiting to database then insert
                cursor.execute("INSERT INTO accounts (username, password) VALUES (%s, %s)", (username, password))
                conn.commit()
                
                # Close connection
                cursor.close()
                conn.close()

        except Exception as e:
            return jsonify({"error": str(e)})

    @app.route('/SignIn', methods=['POST','GET'])
    def SignInAccount():
        try:
            if request.method == 'POST':
                requestData = request.get_json()
                #LogIn request data
                usernameLogIn = requestData.get('UserNameLogin','')
                passwordLogIn = requestData.get('PasswordLogin','')
                print(usernameLogIn, passwordLogIn)
                conn = psycopg2.connect(
                    dbname='clientside',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )
                cursor = conn.cursor()
                cursor.execute("SELECT * FROM accounts WHERE username = %s AND password = %s", (usernameLogIn, passwordLogIn))
                data = cursor.fetchone()
                if data: 
                    return jsonify({'success': True, 'data': {'username': data[0], 'password': data[1]}})
                else:
                    return jsonify({'success': False, 'message': "Incorrect Email or Password"})

                cursor.close()
                conn.close()

        except Exception as e:
            return jsonify({"error": str(e)})
    
    @app.route('/ForgotPassword', methods=['POST','GET'])
    def ForgotPassword():
        try:
            if request.method == 'POST':
                requestData = request.get_json()
                Email = requestData.get('Email','')
                conformPassword = requestData.get('ConformPassword','')
                print(Email , conformPassword)
                conn = psycopg2.connect(
                    dbname='clientside',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )             
                return jsonify({"message": "Password reset request received"})   
        except Exception as e:
            return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
