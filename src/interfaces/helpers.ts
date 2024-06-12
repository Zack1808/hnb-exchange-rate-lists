import React from "react";

export interface ScrollIntoViewProps {
  target: React.RefObject<HTMLDivElement>;
}

export interface ChangeDateByDaysProps {
  date: string;
  daysAmount: number;
}
