import { Props as ButtonProps } from "../button/types";

export interface Props {
  children: any;
  title: string;
  isVisible: boolean;
  onToggle: (isVisible: boolean) => void;
  secondaryButton?: ButtonProps;
  primaryButton?: ButtonProps;
}

export interface ContentProps {
  hasFooter?: boolean;
}
