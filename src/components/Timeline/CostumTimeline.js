import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import "./timeline.css";

const CostumTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstItem "}>
        <TimelineSeparator>
          <TimelineDot className={"timeline-dot-header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className={"separator_padding"}>
      <TimelineDot variant={"outlined"} className={"timeline-dot"} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CostumTimeline;
