from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired

class EditApartment(FlaskForm):
    date_available = DateField('date_available', format="%Y-%m-%d", validators=[DataRequired()])
