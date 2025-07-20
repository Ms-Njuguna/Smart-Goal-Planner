import React, {useState} from "react";

function AddNewGoalForm({ onAdd }) {
    const[name, setName] = useState("");
    const[targtAmount, setTargetAmount] = useState("");
    const[category, setCategory] = useState("");
    const[deadline, setDeadline] = useState("");

    return(
        <form>
            <input type="text" placeholder="Name..." value={}></input>
            <input type="text" placeholder="Target Amount..." value={}></input>
            <input type="text" placeholder="Category..." value={}></input>
            <input type="text" placeholder="Deadline..." value={}></input>
            <button>Add Goal</button>
        </form>
    );
};

export default AddNewGoalForm;