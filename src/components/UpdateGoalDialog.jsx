import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Pencil } from 'lucide-react';

function UpdateGoalDialog({ goals, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  const handleSelectChange = (e) => {
    const goalId = e.target.value;
    const goal = goals.find((g) => g.id === goalId);
    setSelectedGoalId(goalId);

    if (goal) {
      setFormData({
        name: goal.name,
        targetAmount: goal.targetAmount,
        category: goal.category,
        deadline: goal.deadline
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGoalId) {
      onUpdate(selectedGoalId, {
        name: formData.name,
        targetAmount: Number(formData.targetAmount),
        category: formData.category,
        deadline: formData.deadline
      });
      setOpen(false);
      setSelectedGoalId("");
    }
  };

  return (
    <>
      <button 
        type="button"
        onClick={() => setOpen(true)} 
        className="flex items-center gap-2 px-4 py-2 rounded border font-semibold transition text-yellow-600 hover:bg-yellow-50"
      >
        <Pencil size={18} /> Edit A Goal
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Goal</DialogTitle>
          </DialogHeader>

          <select
            className="w-full border p-2 rounded mb-4"
            value={selectedGoalId}
            onChange={handleSelectChange}
          >
            <option value="">-- Select Goal --</option>
            {goals.map((goal) => (
              <option key={goal.id} value={goal.id}>
                {goal.name} - {goal.category}
              </option>
            ))}
          </select>

          {selectedGoalId && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Goal Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                name="targetAmount"
                placeholder="Target Amount"
                value={formData.targetAmount}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UpdateGoalDialog;
