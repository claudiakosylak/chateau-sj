from app.models import db, FloorPlan, environment, SCHEMA
from sqlalchemy.sql import text
from .apartments import apartmentUnits

def seed_floor_plans():
    for plan in apartmentUnits:
        new_plan = FloorPlan(name=plan["name"], bedrooms=plan["bedrooms"], bathrooms=plan["bathrooms"], square_feet=plan["squareFeet"], monthly_rent=plan["monthlyRent"], deposit_amount=plan["deposit"])
        db.session.add(new_plan)
    db.session.commit()

def undo_floor_plans():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.floor_plans RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM floor_plans"))

    db.session.commit()
