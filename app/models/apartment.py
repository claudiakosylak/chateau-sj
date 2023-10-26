from .db import db, environment, SCHEMA, add_prefix_for_prod

class Apartment(db.Model):
    __tablename__ = "apartments"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    floor_plan = db.Column(db.String(10), nullable=False)
    bedrooms = db.Column(db.Integer, nullable=False)
    bathrooms = db.Column(db.Integer, nullable=False)
    square_feet = db.Column(db.Integer, nullable=False)
    monthly_rent = db.Column(db.Integer, nullable=False)
    deposit_amount = db.Column(db.Integer, nullable=False)
    floor_plan_image = db.String(db.String(300))
    is_available = db.Column(db.Boolean, nullable=False)
    date_available = db.Column(db.Date, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'floor_plan': self.floor_plan,
            'bedrooms': self.bedrooms,
            'bathrooms': self.bathrooms,
            'square_feet': self.square_feet,
            'monthly_rent': self.monthly_rent,
            'deposit_amount': self.deposit_amount,
            'floor_plan_image': self.floor_plan_image,
            'is_available': self.is_available,
            'date_available': self.date_available
        }
