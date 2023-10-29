from flask import Blueprint, jsonify
from app.models import FloorPlan, Apartment

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
