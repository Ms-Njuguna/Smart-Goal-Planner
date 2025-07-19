import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const[goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/goals")
    .then((res) => res.json())
    .then((data) => {
      setGoals(data);
    })
    .catch((error) => console.error("Error fetching goals... :", error));
  }, []);

  const addNewGoal = (newGoal) => {
    setGoals((previousGoals) => [...previousGoals, newGoal]);

    fetch("http://localhost:8002/goals", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newGoal)
    })
    .then((res) => res.json())
    .then((returnedGoal) => {
      setGoals((previousGoals) => {
        previousGoals.map((goal) => {
          returnedGoal.id === newGoal.id ? returnedGoal : goal;
        })
      })
    })
    .catch((error) => console.error("Error adding a new goal... :", error));
  };

  const updateGoal = (goalId, updates) => {
    const updatedGoal = goals.find((goal) => {goal.id === goalId})
    const includedGoal = {...updatedGoal, ...updates}

    fetch(`http://localhost:8002/goals/${goalId}`, {
      method : "PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body : JSON.stringify(includedGoal)
    })
    .then(res => res.json())
    .then((returnedGoal) => {
      setGoals((previousGoals) => {
        previousGoals.map((goal) => {
          returnedGoal.id === goal.id ? returnedGoal : goal;
        })
      });
    })
    .catch((error) => console.error("Error updating the goal...", error))
  };

  const deleteGoal = () => {};

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Smart Goal Planner!
      </h1>
    </>
  )
}

export default App
