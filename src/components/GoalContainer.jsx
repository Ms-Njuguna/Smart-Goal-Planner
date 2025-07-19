import React from "react";
import Goal from "./Goal";

function GoalComponent({ goals, onUpdate, onDelete }) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Target Amount</th>
                <th>Saved Amount</th>
                <th>Remaining Amount</th>
                <th>Deadline</th>
                <th>Time left</th>
                <th>Progress</th>
            </tr>
            {goals.map((goal, index) => {
                return (
                    <tr>
                        <Goal 
                        key={index} 
                        name={goal.name} 
                        category={goal.category} 
                        target={goal.targetAmount} 
                        saved={goal.savedAmount} 
                        deadline={goal.deadline} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete}/>
                    </tr>
                )
            })}
        </table>
    )
};

export default GoalComponent;