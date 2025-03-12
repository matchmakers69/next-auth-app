import { LinearProgressProps } from '@mui/material/LinearProgress';

export type ProgressBarProps = {
  progress: number;
  indicator?: string;
} & LinearProgressProps;