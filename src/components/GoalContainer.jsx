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
    const completedGoals = goals.filter((goal) => (goal.targetAmount - (goal.savedAmount || 0)) <= 0);

    return (
        <>
           <div className="flex flex-wrap gap-4 items-center mb-6">
               <AddGoalDialog onAdd={onAdd} savedAmount={savedAmount} open={openDialog} setOpen={setOpenDialog} />
               <UpdateGoalDialog goals={goals} onUpdate={onUpdate} />
               <DepositDialog goals={goals} onDeposit={onDeposit}/>
               <DeleteGoalDialog goals={goals} onDelete={onDelete} />
           </div>
           <div className="overflow-x-auto shadow rounded-lg bg-white border border-gray-200">
               <table className="min-w-full text-sm text-left">
                  <thead className="bg-indigo-600 text-white">
                      <tr>
                         <th className="px-4 py-2">Name</th>
                         <th className="px-4 py-2">Category</th>
                         <th className="px-4 py-2">Target Amount</th>
                         <th className="px-4 py-2">Saved Amount</th>
                         <th className="px-4 py-2">Remaining Amount</th>
                         <th className="px-4 py-2">Deadline</th>
                         <th className="px-4 py-2">Time left</th>
                         <th className="px-4 py-2">Progress</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
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
           </div>
           <div className="mt-8 bg-gray-50 border p-4 rounded-xl shadow-sm">
                <div className="flex justify-around mb-4">
                    <div>
                        <p className="text-sm text-gray-500">Total Goals</p>
                        <p className="text-xl font-semibold text-black">{totalGoals}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Saved</p>
                        <p className="text-xl font-semibold text-green-600">Ksh {totalSaved.toLocaleString()}</p>
                    </div>
                </div>
                <hr className="border-gray-300 my-4" />
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Completed Goals</p>
                    {completedGoals.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                           {completedGoals.map((goal) => (
                               <li key={goal.id} className="text-gray-700">
                                    <span className="font-medium">{goal.name}</span>
                                    <span className="text-xs text-gray-500 px-4">
                                        Finished: {new Date(goal.finishedAt || goal.updatedAt || Date.now()).toLocaleDateString()}
                                    </span>
                               </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 italic">No goals completed yet.</p>
                    )}
                </div>
            </div>
        </>
    )
};

export default GoalContainer;