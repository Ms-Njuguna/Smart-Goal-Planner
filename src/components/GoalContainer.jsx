import React, {useState} from "react";
import Goal from "./Goal";
import AddGoalDialog from "./AddGoalDialog";
import DeleteGoalDialog from "./DeleteGoalDialog";
import UpdateGoalDialog from "./UpdateGoalDialog";
import DepositDialog from "./DepositDialog";

function GoalContainer({ goals, onAdd, savedAmount, onUpdate, onDelete, onDeposit }) {
    const [openDialog, setOpenDialog] = useState(false);
    const totalGoals = goals.length;
    const totalSaved = goals.reduce((sum, goal) => sum + (goal.savedAmount || 0), 0);

    
    return (
        <>
           <div className="flex gap-4 items-center">
               <AddGoalDialog onAdd={onAdd} savedAmount={savedAmount} open={openDialog} setOpen={setOpenDialog} />
               <UpdateGoalDialog goals={goals} onUpdate={onUpdate} />
               <DepositDialog goals={goals} onDeposit={onDeposit}/>
               <DeleteGoalDialog goals={goals} onDelete={onDelete} />
           </div>
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
           <div className="mt-8 bg-gray-50 border p-4 rounded-xl shadow-sm flex justify-around">
                <div>
                    <p className="text-sm text-gray-500">Total Goals</p>
                    <p className="text-xl font-semibold text-black">{totalGoals}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Total Saved</p>
                    <p className="text-xl font-semibold text-green-600">Ksh {totalSaved.toLocaleString()}</p>
                </div>
            </div>
        </>
    )
};

export default GoalContainer;