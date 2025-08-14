// src/utils/types.ts
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  stroke?: boolean;
  border?: string;
  color?: string;
}

export interface HeadProps {
  header: string;
  text: string;
}
