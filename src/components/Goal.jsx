import React from "react";
import { differenceInDays } from 'date-fns';
import GoalProgress from "./GoalProgress.jsx";

function Goal({ name, category, target, saved, deadline, onUpdate, onDelete}) {
    const remaining = parseFloat((target ?? 0) - (saved ?? 0));

    const timeRemaining = (deadline) => {
       const currentDay = new Date();
       const lastDay = new Date(deadline);

       const days = differenceInDays(lastDay, currentDay);

       if (days < 0) {
           return <span className="text-red-600 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ff0000"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>Overdue</span>;
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
            <td>{name}</td>
            <td>{category}</td>
            <td>{target}</td>
            <td>{saved}</td>
            <td>{remaining}</td>
            <td>{deadline}</td>
            <td>{timeRemaining(deadline)}</td>
            <td>
                <GoalProgress target={target} remaining={remaining}/>
            </td>
        </>
    )
};

export default Goal;