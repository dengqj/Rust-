
export type LocaleString = {
  en: string;
  zh: string;
};

export interface Explanation {
  title: LocaleString;
  description: LocaleString;
}

export interface Topic {
  id: string;
  title: LocaleString;
  coreConcept: LocaleString;
  exampleCode?: string;
  explanations: Explanation[];
}

export interface Level {
  id: string;
  level: number;
  title: LocaleString;
  description: LocaleString;
  topics: Topic[];
}
