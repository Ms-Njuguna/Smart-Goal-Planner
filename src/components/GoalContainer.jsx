import React from "react";
import Goal from "./Goal";

function GoalComponent({ goals, onUpdate, onDelete }) {
    return (
        <table>
            <thead>
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
            </thead>
            <tbody>
                {goals.map((goal) => {
                    return (
                        <tr key={goal.id}>
                            <Goal  
                            name={goal.name} 
                            category={goal.category} 
                            target={goal.targetAmount} 
                            saved={goal.savedAmount} 
                            deadline={goal.deadline} 
                            onUpdate={onUpdate} 
                            onDelete={onDelete}/>
                        </tr> 
                    );
                })}
            </tbody>
        </table>
    )
};

export default GoalComponent;