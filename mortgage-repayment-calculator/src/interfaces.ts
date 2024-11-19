export interface IInputType {
  labelColor: string;
  labelTextPreset: string;
  inputColor: string;
  inputTextPreset: string;
  unitColor: string;
  unitPosition: string;
  // [key: string]: any;
}

export interface IRadioType {
  labelColor: string;
  labelTextPreset: string;
  [key: string]: any;
}

export interface IResult {
  monthly?: number;
  total?: number;
}

export interface IFormData {
  amount: number;
  term: number;
  interest: number;
  type: string;
}
