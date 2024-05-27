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
                username = requestData.get('username', '').lower()
                password = requestData.get('password', '').lower()
                print("------SIGN UP -------")
                conn = psycopg2.connect(
                    dbname='softdesk',
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
                # Get all emails from database
                cursor.execute("SELECT * FROM accounts")
                allAccounts = cursor.fetchall()
                
                sortedAccounts = sorted(allAccounts, key=lambda x: x[1])
                print(sortedAccounts)
                cursor.execute("DELETE FROM accounts")
                conn.commit()
                for account in sortedAccounts:
                    email, password , balance = account[1], account[2] , account[3]
                    print(email, password)
                    # Reinsert the account
                    cursor.execute("INSERT INTO accounts (username, password , balance) VALUES (%s, %s,%s)", (email, password , balance))
                    conn.commit()

                # Close connection
                cursor.close()
                conn.close()
                return jsonify({'success': True, 'message': 'Account created successfully'})

        except Exception as e:
            return jsonify({"error": str(e)})

    @app.route('/SignIn', methods=['POST','GET'])
    def SignInAccount():
        try:
            if request.method == 'POST':
                requestData = request.get_json()
                #LogIn request data
                usernameLogIn = requestData.get('UserNameLogin','').lower()
                passwordLogIn = requestData.get('PasswordLogin','').lower()
                print("------SIGN IN -------")
                print(usernameLogIn, passwordLogIn)

                conn = psycopg2.connect(
                    dbname='softdesk',
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
                email = requestData.get('Email', '').lower()
                conformPassword = requestData.get('ConformPassword', '').lower()
                print(email, conformPassword)
                print("------FORGET PASSWORD -------")

                conn = psycopg2.connect(
                    dbname='softdesk',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )             
                cursor = conn.cursor()
                
                # Check if the email exists
                cursor.execute("SELECT * FROM accounts WHERE username = %s", (email,))
                data = cursor.fetchone()
                print("Fetched email")
                
                if data:
                    # Update password
                    cursor.execute("UPDATE accounts SET password = %s WHERE username = %s", (conformPassword, email))
                    conn.commit()  # Commit changes to the database
                    print("Updated password")

                    # Fetch all accounts
                    cursor.execute("SELECT * FROM accounts")
                    allAccounts = cursor.fetchall()

                    # Sort the accounts based on the password
                    sortedAccounts = sorted(allAccounts, key=lambda x: x[1])
                    print(sortedAccounts)

                    # Delete all records from the accounts table
                    cursor.execute("DELETE FROM accounts")
                    conn.commit()

                    # Reinsert the sorted accounts into the database
                    for account in sortedAccounts:
                        email, password , balance = account[1], account[2] , account[3]
                        print(email, password)
                        # Reinsert the account
                        cursor.execute("INSERT INTO accounts (username, password , balance) VALUES (%s, %s , %s)", (email, password , balance))
                        conn.commit()

                    cursor.close()
                    conn.close()

                    return jsonify({'success': True, 'message': "Password updated successfully"})
                else:
                    return jsonify({'success': False, 'message': "Email not found"})
                    
            else:
                return jsonify({"message": "Password reset request received"})

        except Exception as e:
            return jsonify({"error": str(e)})

    # Admin Interface methods
    @app.route('/AddBalance', methods=['POST','GET'])
    def addBalance():
        if request.method == 'POST':
            try:
                requestData = request.get_json()
                username = requestData.get('username', '').lower()
                balance = int(requestData.get('balance', '0'))
                print("------ADD BALANCE -------")
                print("Received data from frontend:")
                print("Username:", username)
                print("Add Balance:", balance)
                
                # Establishing database connection
                conn = psycopg2.connect(
                    dbname='softdesk',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )
                cursor = conn.cursor()
                cursor.execute("SELECT * FROM accounts WHERE username = %s", (username,))
                data = cursor.fetchone()
                if data:
                    print("---------PROCCESSING------------")
                    print("User found:", username)
                    print("Current balance: ", data[3])
                    currentBalance = int(data[3]) if data[3] else 0
                    totalAmountBalance = currentBalance + balance # totalAmountBalance
                    print("total Added Amount : " , totalAmountBalance)
                    cursor.execute("UPDATE accounts SET balance = %s WHERE username = %s", (totalAmountBalance, username))
                    conn.commit()
                    print("Balance updated successfully for user:", username)
                    print("---SORTING ACCOUNT ---")
                    cursor.execute("SELECT * FROM accounts")
                    allAccounts = cursor.fetchall()
                    
                    sortedAccounts = sorted(allAccounts, key=lambda x: x[1])
                    print(sortedAccounts)
                    cursor.execute("DELETE FROM accounts")
                    conn.commit()
                    for account in sortedAccounts:
                        email, password , balance = account[1], account[2] , account[3]
                        print(email, password)
                    # Reinsert the account
                        cursor.execute("INSERT INTO accounts (username, password , balance) VALUES (%s, %s,%s)", (email, password , balance))
                        conn.commit()
                    return jsonify({'success': True, 'message': 'Balance added successfully'})
                else:
                    print("User not found:", username)
                    return jsonify({'success': False, 'message': 'User not found'})
            except Exception as e:
                print("Error:", e)
                return jsonify({"error": str(e)})
    @app.route('/getBalance', methods=['GET'])
    def getBalance():
            try:
                username = request.args.get('username', '').lower()
                conn = psycopg2.connect(
                    dbname='softdesk',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )
                cursor = conn.cursor()
                cursor.execute("SELECT balance FROM accounts WHERE username = %s", (username,))
                balance = cursor.fetchone()
                cursor.close()
                conn.close()
                print("------GET BALANCE ----")
                print(balance)
                return jsonify({'balance': balance})
            except Exception as e:
                return jsonify({"error": str(e)})

    @app.route('/priceOfFare', methods=['POST', 'GET'])
    def priceOfFare():
         if request.method == 'POST':
            try:
                requestData = request.get_json()
                username = requestData.get('name', '').lower()  # Corrected the key to 'name'
                balance = requestData.get('balanceOfPrice', '')  # Corrected the key to 'balanceOfPrice'
                balances = int(balance)

                # Connect to the database
                conn = psycopg2.connect(
                    dbname='softdesk',
                    user='postgres',
                    password='admin',
                    host='localhost',
                    port='5432'
                )
                cursor = conn.cursor()

                # Fetch the current balance of the user
                cursor.execute("SELECT balance FROM accounts WHERE username = %s", (username,))
                stockBalance = cursor.fetchone()

                if stockBalance:
                    balancesStock = int(stockBalance[0])  # Extracting balance from the tuple
                    totalAmountBalance = balancesStock - balances

                    # Update the balance in the database
                    print("-----PROCESS OF UPDATING BALANCE")
                    cursor.execute("UPDATE accounts SET balance = %s WHERE username = %s", (totalAmountBalance, username))
                    conn.commit()

                    # Fetch all accounts and sort them
                    cursor.execute("SELECT * FROM accounts ORDER BY username")
                    sortedAccounts = cursor.fetchall()
                    
                    # Print sorted accounts
                    print("---SORTED ACCOUNTS ---")
                    for account in sortedAccounts:
                        email, password, balance = account[1], account[2], account[3]
                        print("Email:", email, "Password:", password, "Balance:", balance)

                    # Delete existing accounts
                    cursor.execute("DELETE FROM accounts")
                    conn.commit()

                    # Reinsert sorted accounts
                    for account in sortedAccounts:
                        email, password, balance = account[1], account[2], account[3]
                        cursor.execute("INSERT INTO accounts (username, password, balance) VALUES (%s, %s, %s)", (email, password, balance))
                        conn.commit()
                    print("----DATABASE SORTED SUCCESFULLY-----")

                    cursor.close()
                    conn.close()

                    return jsonify({"BalanceOfFare": totalAmountBalance})
                else:
                    return jsonify({"error": "User not found"})  # If the user doesn't exist
            except Exception as e:
                return jsonify({"error": str(e)})  # Return error message

#    @app.route('/InfoFare', methods=['POST'])
 #   def Fareinfo():
  #      if request.method == 'POST':
   #         try:
    #             if request.method == 'POST':
     #               requestData = request.get_json()
      #              fareFrom = requestData.get("fareFrom", "")
       #             fareTo = requestData.get("fareTo","")
        #            balancePrice = requestData.get("balanceOfPrice","")
         #           print("-----INFO FARE------")
          #          print(fareFrom,fareTo,balancePrice)
        
        #            return jsonify({"fareFrom",fareFrom,"fareTo",fare,"balance",balance})
         #   except Exception as e:
          #      return jsonify({"error": str(e)})  # Return error message
if __name__ == '__main__':
    app.run(debug=True)
