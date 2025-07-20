// src/components/DeleteGoalDialog.jsx
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash2 } from 'lucide-react';

function DeleteGoalDialog({ goals, onDelete }) {
  const [open, setOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    if (selectedGoalId) {
      onDelete(selectedGoalId);
      setOpen(false); 
    }
    console.log("Form submitted");
  };

  return (
    <>
       <button type="button" onClick={() => setOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded border font-semibold transition text-red-600 hover:bg-red-50">
           <Trash2 size={18} /> Delete A Goal
       </button>

       <Dialog open={open} onOpenChange={setOpen}>
           <DialogContent>
               <DialogHeader>
                  <DialogTitle>Select a Goal to Delete</DialogTitle>
               </DialogHeader>

               <select
               className="w-full border p-2 rounded"
               value={selectedGoalId}
               onChange={(e) => setSelectedGoalId(e.target.value)}
               >
                   <option value="">-- Select Goal --</option>
                   {goals.map((goal) => (
                       <option key={goal.id} value={goal.id}>
                           {goal.name} - {goal.category}
                       </option>
                    ))}
                </select>

                <button
                    type="button"
                    onClick={handleDelete}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                Confirm Delete
                </button>
            </DialogContent>
        </Dialog>
    </>
  );
}

export default DeleteGoalDialog;
