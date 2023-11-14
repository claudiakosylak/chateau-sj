from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class EditFloorPlan(FlaskForm):
    rent = IntegerField('rent', validators=[DataRequired()])
    deposit = IntegerField('deposit', validators=[DataRequired()])
