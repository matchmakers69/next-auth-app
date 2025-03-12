import LinearProgress from "@mui/material/LinearProgress";
import { ProgressBarProps } from "./defs";
import { useEffect, useState } from "react";

const ProgressBar = ({ color, progress = 0 }: ProgressBarProps) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const animation = setTimeout(() => {
      setProgressValue(progress);
    }, 400);

    return () => clearTimeout(animation);
  }, [progress]);

  return (
    <div className="progress-bar-wrapper w-full">
      <LinearProgress
        variant="determinate"
        color={color}
        value={progressValue}
        sx={{
          height: 8,
          borderRadius: 9999,
          transition: "all 0.5s ease-in-out", // Smooth transition
        }}
      />
    </div>
  );
};

export default ProgressBar;
