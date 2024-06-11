import React from "react";

export interface HeroContainerProps {
  children: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  background?: boolean;
}

export interface DatePickerProps {
  onChange?: (date: string) => void;
  value?: string;
  disabled?: boolean;
}
