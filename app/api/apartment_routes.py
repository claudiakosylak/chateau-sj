from flask import Blueprint, jsonify
from app.models import Apartment

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
    print("🍎 ", apartment.to_dict())
    return apartment.to_dict()
