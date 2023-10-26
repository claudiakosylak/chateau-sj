from .db import db, environment, SCHEMA, add_prefix_for_prod

class Apartment(db.Model):
    __tablename__ = "apartments"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    is_available = db.Column(db.Boolean, nullable=False)
    date_available = db.Column(db.Date, nullable=False)
    floor_plan_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("floor_plans.id")), nullable=False)

    floor_plan = db.relationship("FloorPlan", back_populates="apartments")

    def to_dict(self):
        return {
            'id': self.id,
            'is_available': self.is_available,
            'date_available': self.date_available,
            'floor_plan': self.floor_plan.to_dict()
        }
