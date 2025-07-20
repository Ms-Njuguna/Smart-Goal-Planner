import React from "react";
import AddNewGoalForm from './AddNewGoalForm.jsx';
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function AddGoalDialog({ onAdd, savedAmount, open, setOpen }) {
  return (
    <>
      <button 
        onClick={() => setOpen(true)} 
        className="text-green-600 font-semibold border px-3 py-1 rounded hover:bg-green-50"
      >
        <Plus size={18}/> Add New Goal
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a New Goal</DialogTitle>
          </DialogHeader>
          <AddNewGoalForm onAdd={onAdd} saved={savedAmount} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddGoalDialog;
