# from flask import Flask, request, jsonify, render_template
# # import pandas as pd
# import os
# from flask_cors import CORS
# import pickle
# from flask_sqlalchemy import SQLAlchemy
# # from flask_migrate import Migrate,migrate
# from sqlalchemy.orm import Mapped
# from sqlalchemy.orm import mapped_column

# app = Flask(__name__)
# CORS(app)

# # model=pickle.load(open(r"model.pkl","rb"))
# # Path to the Excel file

# BASE_DIR = os.path.abspath(os.path.dirname(__file__))
# DATABASE_PATH = os.path.join(BASE_DIR, "form_data.db")
# app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DATABASE_PATH}"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# # EXCEL_FILE = "form_data.xlsx"
# # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
# db = SQLAlchemy(app)
# # migrate = Migrate(app,db)

# class FormData(db.Model):
#     tablename__="form_data"
#     id: Mapped[int] = mapped_column(primary_key=True)  # Auto-incrementing ID
#     name: Mapped[str] = mapped_column(nullable=False)
#     gender: Mapped[str] = mapped_column(nullable=False)
#     style: Mapped[str] = mapped_column(nullable=False)
#     body_type: Mapped[str] = mapped_column(nullable=False)
#     size: Mapped[str] = mapped_column(nullable=False)

#     # def __repr__(self):
#     #     return f"<FormData {self.name}>"

# with app.app_context():
#     db.create_all()

# @app.route("/", methods=['GET'])
# def home():
#     return render_template("index.html")

# # API endpoint to handle form submission
# @app.route("/submit", methods=["POST"])
# def submit_form():
#     try:
#         # Get JSON data from the frontend
#         form_data = request.json

#         if not form_data:
#             return jsonify({"message": "No data provided"}), 400

#             # Create a new FormData object
#         new_entry = FormData(
#             name=form_data["name"],
#             gender=form_data["gender"],
#             style=form_data["styleType"],
#             body_type=form_data["bodyType"],
#             size=form_data["size"],
#         )

#         # Add to the database session and commit
#         db.session.add(new_entry)
#         db.session.commit()

#         return jsonify({"message": "Form data saved successfully!"}), 200

#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"message": "Failed to save form data", "error": str(e)}), 500

# @app.route("/data", methods=["GET"])
# def get_all_data():
#     try:
#         # Query all data from the database
#         all_data = FormData.query.all()

#         # Convert the data into a list of dictionaries
#         result = [
#             {
#                 "id": entry.id,
#                 "name": entry.name,
#                 "gender": entry.gender,
#                 "style": entry.style,
#                 "body_type": entry.body_type,
#                 "size": entry.size,
#             }
#             for entry in all_data
#         ]

#         return jsonify(result), 200
#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"message": "Failed to retrieve data", "error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)



# from flask import Flask, request, jsonify, render_template, send_from_directory
# import os
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.orm import Mapped
# from sqlalchemy.orm import mapped_column

# app = Flask(__name__)
# CORS(app)

# # Configure database
# BASE_DIR = os.path.abspath(os.path.dirname(__file__))
# DATABASE_PATH = os.path.join(BASE_DIR, "form_data.db")
# MODELS_PATH = os.path.join(BASE_DIR, "models")  # Path to the models folder
# app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DATABASE_PATH}"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# db = SQLAlchemy(app)

# # Define the database model
# class FormData(db.Model):
#     tablename__ = "form_data"
#     id: Mapped[int] = mapped_column(primary_key=True)  # Auto-incrementing ID
#     name: Mapped[str] = mapped_column(nullable=False)
#     gender: Mapped[str] = mapped_column(nullable=False)
#     style: Mapped[str] = mapped_column(nullable=False)
#     body_type: Mapped[str] = mapped_column(nullable=False)
#     size: Mapped[str] = mapped_column(nullable=False)

# with app.app_context():
#     db.create_all()

# @app.route("/", methods=['GET'])
# def home():
#     return render_template("index.html")

# # API endpoint to handle form submission
# @app.route("/submit", methods=["POST"])
# def submit_form():
#     try:
#         # Get JSON data from the frontend
#         form_data = request.json

#         if not form_data:
#             return jsonify({"message": "No data provided"}), 400

#         # Create a new FormData object
#         new_entry = FormData(
#             name=form_data["name"],
#             gender=form_data["gender"],
#             style=form_data["styleType"],
#             body_type=form_data["bodyType"],
#             size=form_data["size"],
#         )

#         # Add to the database session and commit
#         db.session.add(new_entry)
#         db.session.commit()

#         return jsonify({"message": "Form data saved successfully!"}), 200

#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"message": "Failed to save form data", "error": str(e)}), 500

# # API endpoint to serve .obj files
# @app.route("/get-cloth", methods=["GET"])
# def get_cloth():
#     try:
#         cloth_name = request.args.get("cloth")  # Get cloth name from query param

#         if not cloth_name:
#             return jsonify({"message": "Cloth name not provided"}), 400

#         # Construct the file path
#         file_path = os.path.join(MODELS_PATH, f"{cloth_name}.obj")

#         # Check if the file exists
#         if not os.path.exists(file_path):
#             return jsonify({"message": f"{cloth_name}.obj not found"}), 404

#         # Send the .obj file to the frontend
#         return send_from_directory(MODELS_PATH, f"{cloth_name}.obj")

#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"message": "Failed to fetch cloth", "error": str(e)}), 500

# @app.route("/data", methods=["GET"])
# def get_all_data():
#     try:
#         # Query all data from the database
#         all_data = FormData.query.all()

#         # Convert the data into a list of dictionaries
#         result = [
#             {
#                 "id": entry.id,
#                 "name": entry.name,
#                 "gender": entry.gender,
#                 "style": entry.style,
#                 "body_type": entry.body_type,
#                 "size": entry.size,
#             }
#             for entry in all_data
#         ]

#         return jsonify(result), 200
#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"message": "Failed to retrieve data", "error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, render_template
import os

app = Flask(__name__)

# Serve the static folder
# BASE_DIR = os.path.abspath(os.path.dirname(__file__))

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
