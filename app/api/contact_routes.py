from flask import Blueprint, jsonify, request
from app.models import Contact, db
from flask_login import login_required

contact_routes = Blueprint('contacts', __name__)


@contact_routes.route('')
@login_required
def contacts():
    """
    Query for all contacts and returns them in a list of contact dictionaries
    """
    contacts = Contact.query.all()
    return {'contacts': [contact.to_dict() for contact in contacts]}
