import React, {useState} from "react";
import Goal from "./Goal";
import AddGoalDialog from "./AddGoalDialog";
import DeleteGoalDialog from "./DeleteGoalDialog";
import { Edit2, Coins } from 'lucide-react';

function GoalContainer({ goals, onAdd, savedAmount, onUpdate, onDelete }) {
    const [openDialog, setOpenDialog] = useState(false);
    
    return (
        <>
           <div className="flex gap-4 items-center">
               <AddGoalDialog onAdd={onAdd} savedAmount={savedAmount} open={openDialog} setOpen={setOpenDialog} />
               <button onClick={onUpdate} className="hover:text-yellow-600"><Edit2 size={18} /> Update A Goal</button>
               <button  title="Make Deposit" className="hover:text-yellow-600"><Coins size={18} /> Deposit</button>
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
        </>
    )
};

export default GoalContainer;