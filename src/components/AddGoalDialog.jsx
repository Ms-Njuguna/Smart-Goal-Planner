import React from "react";
import AddNewGoalForm from './AddNewGoalForm.jsx';
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function AddGoalDialog({ onAdd, savedAmount, open, setOpen }) {
  return (
    <>
      <button 
        type="button"
        onClick={() => setOpen(true)} 
        className="flex items-center gap-2 px-4 py-2 rounded border font-semibold transitiontext-green-600 hover:bg-green-50"
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
