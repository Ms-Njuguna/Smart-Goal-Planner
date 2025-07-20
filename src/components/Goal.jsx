import React from "react";
import { differenceInDays } from 'date-fns';
import GoalProgress from "./GoalProgress.jsx";

function Goal({ name, category, target, saved, deadline, onUpdate, onDelete}) {
    const remaining = parseFloat((target ?? 0) - (saved ?? 0));

    const timeRemaining = (deadline) => {
       const currentDay = new Date();
       const lastDay = new Date(deadline);

       const days = differenceInDays(lastDay, currentDay);

       //handles the days left to deadline
       if (days < 0) {
           return <span className="text-red-600 font-semibold">Overdue</span>;
       } else if (days === 0) {
           return <span className="text-yellow-600 font-semibold">Due today</span>;
       } else if (days <= 30) {
           return <span className="text-orange-500 font-medium">{days} days left – Act soon!</span>;
       } else {
           return <span className="text-green-600">{days} days left</span>;
        }
    };


    return (
        <>
            <td className="py-4 px-2">{name}</td>
            <td className="py-4 px-2">{category}</td>
            <td className="py-4 px-2">{target}</td>
            <td className="py-4 px-2">{saved}</td>
            <td className="py-4 px-2">{remaining}</td>
            <td className="py-4 px-2">{deadline}</td>
            <td className="py-4 px-2">{timeRemaining(deadline)}</td>
            <td className="py-4 px-2">
                <GoalProgress target={target} remaining={remaining}/>
            </td>
        </>
    )
};

export default Goal;