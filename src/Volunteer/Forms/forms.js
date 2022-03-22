import React from "react";
import './forms.css';
import { FoodPrep } from "./foodPrepForm";
import { FoodDelivery } from "./foodDeliveryForm";
import { GroupForm } from "./groupForm";

export function Forms() {
    
    return (
        <div className="vol-forms">
            <FoodPrep />
            <FoodDelivery />
            <GroupForm />
        </div>
    );
}