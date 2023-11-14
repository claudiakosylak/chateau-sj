from flask import Blueprint, jsonify, request
from app.models import FloorPlan, Apartment, db
from flask_login import login_required
from app.forms import EditFloorPlan

floor_plan_routes = Blueprint('floor_plans', __name__)

@floor_plan_routes.route('')
def floor_plans():
    """
    Query for all floor plans and returns them in a list of floor plan dictionaries
    """
    floor_plans = FloorPlan.query.all()
    result = []
    for floor_plan in floor_plans:
        floor_plan = floor_plan.to_dict()
        apartments = Apartment.query.filter(Apartment.floor_plan_id == floor_plan["id"]).all()
        floor_plan["apartments"] = [apartment.to_dict() for apartment in apartments]
        result.append(floor_plan)

    return {'floor_plans': result}

@floor_plan_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_floor_plan(id):
    plan = FloorPlan.query.get(id)
    form = EditFloorPlan()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        plan.monthly_rent = form.data["rent"]
        plan.deposit_amount = form.data["deposit"]
        db.session.commit()
        return plan.to_dict()
