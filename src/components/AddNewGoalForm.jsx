import React, {useState} from "react";

function AddNewGoalForm({ onAdd, saved }) {
    const[name, setName] = useState("");
    const[targetAmount, setTargetAmount] = useState("");
    const[category, setCategory] = useState("");
    const[deadline, setDeadline] = useState("");
    const createdAt = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGoal = {
            name, 
            targetAmount : Number(targetAmount), 
            savedAmount : Number(saved || 0),
            category, 
            deadline, 
            createdAt
        };
        onAdd(newGoal);

        setName("");
        setTargetAmount("");
        setCategory("");
        setDeadline("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Target Amount..." value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)}></input>
            <input type="text" placeholder="Category..." value={category} onChange={(e) => setCategory(e.target.value)}></input>
            <input type="text" placeholder="Deadline..." value={deadline} onChange={(e) => setDeadline(e.target.value)}></input>
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default AddNewGoalForm;