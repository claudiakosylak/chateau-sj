from app.models import db, Apartment, environment, SCHEMA
from sqlalchemy.sql import text
import random

from datetime import datetime

today = datetime.now()

apartmentUnits = [
    {
        "name": "Plan A",
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFeet": 900,
        "monthlyRent": 1700,
        "deposit": 800,
        "availability": datetime.strptime("2023-11-01T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan B",
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFeet": 1200,
        "monthlyRent": 2200,
        "deposit": 1000,
        "availability": datetime.strptime("2023-10-28T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 3
    },
    {
        "name": "Plan C",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": 1400,
        "monthlyRent": 2500,
        "deposit": 1200,
        "availability": datetime.strptime("2023-11-15T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 1
    },
    {
        "name": "Plan D",
        "bedrooms": 0,
        "bathrooms": 1,
        "squareFeet": 800,
        "monthlyRent": 1500,
        "deposit": 750,
        "availability": datetime.strptime("2023-10-30T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 4
    },
    {
        "name": "Plan E",
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFeet": 1100,
        "monthlyRent": 1800,
        "deposit": 900,
        "availability": datetime.strptime("2023-11-10T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan F",
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFeet": 950,
        "monthlyRent": 1600,
        "deposit": 800,
        "availability": datetime.strptime("2023-11-05T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan G",
        "bedrooms": 4,
        "bathrooms": 3,
        "squareFeet": 1500,
        "monthlyRent": 3000,
        "deposit": 1500,
        "availability": datetime.strptime("2023-11-20T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 1
    },
    {
        "name": "Plan H",
        "bedrooms": 2,
        "bathrooms": 1,
        "squareFeet": 1000,
        "monthlyRent": 1700,
        "deposit": 800,
        "availability": datetime.strptime("2023-11-25T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan I",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": 1300,
        "monthlyRent": 2400,
        "deposit": 1200,
        "availability": datetime.strptime("2023-11-08T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan J",
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFeet": 850,
        "monthlyRent": 1600,
        "deposit": 750,
        "availability": datetime.strptime("2023-11-18T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 1
    },
    {
        "name": "Plan K",
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFeet": 1150,
        "monthlyRent": 1900,
        "deposit": 900,
        "availability": datetime.strptime("2023-11-22T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 3
    },
    {
        "name": "Plan L",
        "bedrooms": 0,
        "bathrooms": 1,
        "squareFeet": 820,
        "monthlyRent": 1550,
        "deposit": 800,
        "availability": datetime.strptime("2023-10-29T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 1
    },
    {
        "name": "Plan M",
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFeet": 950,
        "monthlyRent": 1650,
        "deposit": 850,
        "availability": datetime.strptime("2023-11-14T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 3
    },
    {
        "name": "Plan N",
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFeet": 1100,
        "monthlyRent": 1800,
        "deposit": 900,
        "availability": datetime.strptime("2023-11-03T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan O",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": 1350,
        "monthlyRent": 2500,
        "deposit": 1200,
        "availability": datetime.strptime("2023-11-12T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 1
    },
    {
        "name": "Plan P",
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFeet": 880,
        "monthlyRent": 1600,
        "deposit": 750,
        "availability": datetime.strptime("2023-11-06T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan Q",
        "bedrooms": 2,
        "bathrooms": 1,
        "squareFeet": 1050,
        "monthlyRent": 1750,
        "deposit": 850,
        "availability": datetime.strptime("2023-11-16T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan R",
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFeet": 1400,
        "monthlyRent": 2600,
        "deposit": 1300,
        "availability": datetime.strptime("2023-11-27T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 1
    },
    {
        "name": "Plan S",
        "bedrooms": 0,
        "bathrooms": 1,
        "squareFeet": 810,
        "monthlyRent": 1550,
        "deposit": 800,
        "availability": datetime.strptime("2023-11-02T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 2
    },
    {
        "name": "Plan T",
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFeet": 900,
        "monthlyRent": 1700,
        "deposit": 800,
        "availability": datetime.strptime("2023-11-09T00:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        "availableUnits": 3
    }
]




def seed_apartments():
    floor_plan_counter = 1
    for apartment in apartmentUnits:
        for i in range(apartment["availableUnits"]):
            available = datetime.strptime(f"{random.randint(2023, 2024)}-{random.randint(1, 12)}-{random.randint(1, 28)}", '%Y-%m-%d')
            new_apartment = Apartment(floor_plan_id=floor_plan_counter, is_available=(available <= today), date_available=available)
            db.session.add(new_apartment)
        floor_plan_counter += 1
    db.session.commit()

def undo_apartments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.apartments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM apartments"))

    db.session.commit()
