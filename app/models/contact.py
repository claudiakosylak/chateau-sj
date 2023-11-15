from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Contact(db.Model):
    __tablename__ = "contacts"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    bedrooms = db.Column(db.Integer(), nullable=False)
    move_in_date = db.Column(db.Date(), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.now())

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'bedrooms': self.bedrooms,
            'move_in_date': self.move_in_date,
            'created_at': self.created_at
        }
