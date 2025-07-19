import React from "react";
import { differenceInDays } from 'date-fns';

function Goal({ name, category, target, saved, deadline, onUpdate, onDelete}) {
    const remaining = parseFloat(target - saved);

    const timeRemaining = (deadline) => {
        const currentDay = new Date();
        const lastDay = new Date(deadline);

        const days = differenceInDays(lastDay, currentDay);

        if (days < 0) {
            return 'Deadline passed'
        } else if(days === 0) {
            return 'Due today'
        } else if (days <= 30) {
            return `${days} days left – Act soon!`
        } else {
            return `${days} days left`
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
        </>
    )
};

export default Goal;