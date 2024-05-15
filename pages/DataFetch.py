from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

@app.route('/emailData', methods=['POST'])
def emailData():
    if request.method == 'POST':
        req_userData = request.get_json()
        userData = req_userData.get('name', '')#Get the value from the request of name

        finalData = {
            "name": userData
        }
        print(finalData)
        
        # Establish connection to PostgreSQL database
        try:
            conn = psycopg2.connect(
                dbname='sample',
                user='postgres',
                password='admin',
                host='localhost',
                port='5432'
            )

            cursor = conn.cursor()

            # Insert data into PostgreSQL table
            cursor.execute("INSERT INTO users (name) VALUES (%s)", (userData,))
            conn.commit()

            # Select data from PostgreSQL table
            cursor.execute("SELECT * FROM users WHERE name = %s", ('Railey',))
            result = cursor.fetchone()

            # Close the cursor and connection
            cursor.close()
            conn.close()

            if result:
                # May result na na-fetch mula sa query
                print("Data fetched successfully:", result[1])
                # I-return mo ang result o gawin ang mga susunod na hakbang na iyong gustong gawin
            else:
                # Walang result na na-fetch mula sa query
                print("No data fetched for name 'Tan'")
                # Maaaring mag-return ka ng error message o gawin ang mga susunod na hakbang na iyong gustong gawin

            return jsonify(finalData)
        except Exception as e:
            return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
