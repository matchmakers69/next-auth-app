import LinearProgress from "@mui/material/LinearProgress";
import { ProgressBarProps } from "./defs";

const ProgressBar = ({ color, progress }: ProgressBarProps) => {
  return (
    <div className="progress-bar-wrapper w-full">
      <LinearProgress
        variant="determinate"
        color={color}
        value={progress}
        sx={{ height: 8, borderRadius: 9999 }}
      />
    </div>
  );
};

export default ProgressBar;
