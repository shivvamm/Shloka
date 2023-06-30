import type { Language } from 'prism-react-renderer';

export interface Shloka {
  Sloka: string;
  Class: string;
}

export interface CodeSample {
  request: string;
  response: string;
}

export interface Guide {
  heading: string;
  subHeading?: string;
  link: string;
  isNewlyAdded?: boolean;
  codeSample: CodeSample;
}

export interface CodeBlock {
  language: Language;
  snippet: string;
}
