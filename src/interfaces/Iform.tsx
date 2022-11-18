export interface Ivalues {
  name: string;
  description: string;
  localization: string;
  coordenades: string;
  contact: string;
}

export interface IformCollection extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  description: HTMLInputElement;
  localization: HTMLInputElement;
  coordenades: HTMLInputElement;
  contact: HTMLInputElement;
}

export interface IformElements extends HTMLFormElement {
  elements: IformCollection;
}
