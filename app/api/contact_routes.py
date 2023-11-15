from flask import Blueprint, jsonify, request
from app.models import Contact, db
from app.forms import ContactForm
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

@contact_routes.route('', methods=["POST"])
def create_contact():
    """
    Creates a new contact
    """
    form = ContactForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        contact = Contact(
            name=form.data["name"],
            email=form.data["email"],
            phone=form.data["phone"],
            bedrooms=form.data["bedrooms"],
            move_in_date=form.data["move_in_date"]
        )
        db.session.add(contact)
        db.session.commit()
        return contact.to_dict()
    return form.errors, 401
