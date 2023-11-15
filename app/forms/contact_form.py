from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, DateField
from wtforms.validators import DataRequired

class ContactForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    phone = StringField('phone', validators=[DataRequired()])
    bedrooms = IntegerField('bedrooms', validators=[DataRequired()])
    move_in_date = DateField('move_in_date', format="%Y-%m-%d", validators=[DataRequired()])
