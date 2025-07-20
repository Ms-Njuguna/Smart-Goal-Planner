import { useEffect, useState } from 'react'
import './App.css'
import GoalContainer from './components/GoalContainer'

//the main function
function App() {
  //state plus variables required
  const[goals, setGoals] = useState([]);
  const savedAmount = 0;

  //fetching the goals from the db.json file
  useEffect(() => {
    fetch("http://localhost:8002/goals")
    .then((res) => res.json())
    .then((data) => {
      setGoals(data);
    })
    .catch((error) => console.error("Error fetching goals... :", error));
  }, []);

  //the logic that allows the user to add a new goal
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

  //the logic that allows the user to update specific aspects of a specific goal
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

  //the logic allows the user to delete a goal from the list
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

  //this allows the user to deposit money that in turn adds up to money saved for the particular goal
  const depositToGoal = (goalId, amount) => {
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;

    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + amount
    };

    fetch(`http://localhost:8002/goals/${goalId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedGoal)
    })
    .then((res) => res.json())
    .then((returnedGoal) => {
      setGoals((prev) =>
        prev.map((g) => (g.id === goalId ? returnedGoal : g))
      );
    })
    .catch((error) => console.error('Error depositing into goal...', error));
  };


  return (
    <>
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-8 text-center">
        Smart Goal Planner
      </h1>
      <GoalContainer goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} onAdd={addNewGoal} savedAmount={savedAmount} onDeposit={depositToGoal}/>
    </>
  )
}

export default App
