import { useEffect, useState } from 'react'
import './App.css'
import GoalContainer from './components/GoalContainer'
import ErrorPopover from './components/ErrorPopover';


function App() {
  const[goals, setGoals] = useState([]);
  const[savedAmount, setSavedAmount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8002/goals")
    .then((res) => res.json())
    .then((data) => {
      setGoals(data);
    })
    .catch((error) => console.error("Error fetching goals... :", error));
  }, []);

  const addNewGoal = (newGoal) => {

    fetch("http://localhost:8002/goals", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newGoal)
    })
    .then((res) => res.json())
    .then((returnedGoal) => {
      setGoals((previousGoals) => [...previousGoals, returnedGoal]);
    })
    .catch((error) => console.error("Error adding a new goal... :", error));
  };

  const updateGoal = (goalId, updates) => {
    const updatedGoal = { ...goals.find(goal => goal.id === goalId), ...updates };

    fetch(`http://localhost:8002/goals/${goalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGoal)
    })
    .then(res => res.json())
    .then((returnedGoal) => {
      setGoals((prevGoals) =>
        prevGoals.map(goal => (goal.id === returnedGoal.id ? returnedGoal : goal))
      );
    })
    .catch((error) => console.error("Error updating the goal...", error));
  };


  const deleteGoal = (goalId) => {
    fetch(`http://localhost:8002/goals/${goalId}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
      setGoals((previousGoals) => 
        previousGoals.filter((goal) => goal.id !== goalId)
      );
    })
    .catch((error) => console.error("Error deleting the goal...", error));
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Smart Goal Planner!
      </h1>
      <GoalContainer goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} onAdd={addNewGoal} savedAmount={savedAmount}/>
    </>
  )
}

export default App
