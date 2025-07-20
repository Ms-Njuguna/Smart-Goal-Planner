import React from "react";
import * as Progress from '@radix-ui/react-progress';

function GoalProgress({ target = 100, remaining }) {
  const percentage = Math.max(0, Math.min(100, ((target - remaining) / target) * 100));
  const roundedPercentage = Math.round(percentage);

  return (
    <div className="flex items-center gap-2 w-full">
      <Progress.Root className="bg-gray-200 w-full h-3 rounded overflow-hidden">
        <Progress.Indicator
          className="bg-indigo-600 h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </Progress.Root>
      <span className="text-sm font-medium text-gray-800">{roundedPercentage}%</span>
    </div>
  );
}

export default GoalProgress;
