import { Dispatch, SetStateAction } from "react";

export interface ImageData {
  id: number;
  title: string;
  thumbnail: string;
  fullSize: string;
}
export type FormValues = {
  name: string;
  email: string;
  message: string;
};
export interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string;
}
export interface NavItemProps {
  path: string;
  isActive: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  name: string;
}
