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
    image_1 = db.Column(db.String(255), nullable=False)
    image_2 = db.Column(db.String(255))
    image_3 = db.Column(db.String(255))
    image_4 = db.Column(db.String(255))
    image_5 = db.Column(db.String(255))
    image_6 = db.Column(db.String(255))

    apartments = db.relationship("Apartment", back_populates="floor_plan", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'bedrooms': self.bedrooms,
            'bathrooms': self.bathrooms,
            'square_feet': self.square_feet,
            'monthly_rent': self.monthly_rent,
            'deposit_amount': self.deposit_amount,
            'image_1': self.image_1,
            'image_2': self.image_2,
            'image_3': self.image_3,
            'image_4': self.image_4,
            'image_5': self.image_5,
            'image_6': self.image_6
            # 'apartments': [apartment.to_dict() for apartment in self.apartments]
        }
