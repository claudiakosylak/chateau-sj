from app.models import db, Contact, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_contacts():
    num = 5555555555
    for i in range(10):
        contact = Contact(
            name=f"Example Contact{i}", email=f"contact{i}@email.com", phone=str(num+1), bedrooms=2, move_in_date=datetime.now()
        )
        db.session.add(contact)
    db.session.commit()


def undo_contacts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.contacts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM contacts"))

    db.session.commit()
