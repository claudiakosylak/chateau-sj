from flask import Blueprint, jsonify, request
from app.models import Apartment, db
from flask_login import login_required
from app.forms import EditApartment

apartment_routes = Blueprint('apartments', __name__)

@apartment_routes.route('')
def apartments():
    """
    Query for all apartments and returns them in a list of apartment dictionaries
    """
    apartments = Apartment.query.all()
    return {'apartments': [apartment.to_dict() for apartment in apartments]}

@apartment_routes.route('/<int:id>')
def apartment(id):
    """
    Query for an apartment by id and returns that apartment in a dictionary
    """
    apartment = Apartment.query.get(id)
    return apartment.to_dict()

@apartment_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_apartment(id):
    """"
    Edits an apartment's date available by apartment ID
    """
    apartment = Apartment.query.get(id)
    form = EditApartment()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        apartment.date_available = form.data["date_available"]
        db.session.commit()
        return apartment.to_dict()
