export interface ITheme {
  body: string;
  title: string;
  text: string;
  accent: string;
  accentLight: string;
  elements: string;
}

export interface ICompany {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  website: string;
  apply: string;
}

export interface IJob extends ICompany {
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  description: string;
  requirements: { content: string; items: string[] };
  role: { content: string; items: string[] };
}

export interface ButtonProps {
  px?: string;
  py?: string;
  onClick?: () => void;
  disabled?: boolean;
}
