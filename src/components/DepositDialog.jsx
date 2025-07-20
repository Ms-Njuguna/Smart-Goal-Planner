import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PiggyBank } from 'lucide-react';

function DepositDialog({ goals, onDeposit }) {
  const [open, setOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    const depositValue = Number(amount);

    if (!selectedGoalId || isNaN(depositValue) || depositValue <= 0) return;

    onDeposit(selectedGoalId, depositValue);
    setOpen(false);
    setSelectedGoalId('');
    setAmount('');
  };

  return (
    <>
      <button 
        type="button"
        onClick={() => setOpen(true)}
        className="text-yellow-600 font-semibold border px-3 py-1 rounded hover:bg-yellow-50 flex items-center gap-1"
      >
        <PiggyBank size={18} /> Deposit
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deposit into a Goal</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleDeposit} className="space-y-4">
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

            <input
              type="number"
              min="1"
              className="w-full border p-2 rounded"
              placeholder="Enter amount to deposit"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              Confirm Deposit
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DepositDialog;
