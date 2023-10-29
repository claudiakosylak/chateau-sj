from .db import db, environment, SCHEMA, add_prefix_for_prod

class FloorPlan(db.Model):
    __tablename__ = "floor_plans"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(10), nullable=False)
    bedrooms = db.Column(db.Integer, nullable=False)
    bathrooms = db.Column(db.Integer, nullable=False)
    square_feet = db.Column(db.Integer, nullable=False)
    monthly_rent = db.Column(db.Integer, nullable=False)
    deposit_amount = db.Column(db.Integer, nullable=False)

    apartments = db.relationship("Apartment", back_populates="floor_plan", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'bedrooms': self.bedrooms,
            'bathrooms': self.bathrooms,
            'square_feet': self.square_feet,
            'monthly_rent': self.monthly_rent,
            'deposit_amount': self.deposit_amount
            # 'apartments': [apartment.to_dict() for apartment in self.apartments]
        }
