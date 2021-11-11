export interface IElementShow {
  label: string
  value: string
  middle: boolean
}

export interface IElementInput {
  type: string
  name: string
  label: string
  value: string
  size: string
  onChange?: (e: any) => void
  readonly?: boolean
  valueVisible?: boolean
}

export interface IElementInputNoLabel {
  type: string
  name: string
  value: string
  size: string
  onChange?: (e: any) => void
}

export interface IElementsInput {
  type: string
  name: string
  label: string
  values: any
  index: boolean
  bold: boolean
  onChange?: (e: any) => void
  valueVisible?: boolean
}

export interface IBalanceElementsInput {
  type: string
  name: string
  label: string
  values: any
  bold: boolean
  subIndex?: boolean
  onChange?: (e: any) => void
}

export interface IDataElementsInput {
  type: string
  name: string
  label: string
  values: any
  bold: boolean
  subIndex?: boolean
  onChange?: (e: any) => void
}

export interface IElementTextArea {
  label: string
  name: string
  value: string
  rows: number
  cols: number
  size: string
  onChange?: (e: any) => void
  readonly?: boolean
}

export interface IElementSelect {
  label: string
  name: string
  value: string
  options: any
  size: string
  onChange?: (e: any) => void
}
export interface ITableElementCheckbox {
  value: string
  tableMeta: any
  singelValue: boolean
  itemChecked?: string
  handleCheckReport: (value: any, tableMeta: any) => any
}

export interface IElementFormInput {
  type: string
  name: string
  label: string
  handleSet: (event: any) => void
  value: string
  errorMessage?: string
  placeholder?: string
  maxLength?: number
  middle?: boolean
  modal?: boolean
  onBlur?: (event: any) => void
  disabled?: boolean
}

export interface IElementSelectValue {
  value: string
  label: string
}

export interface IElementFormSelect {
  name: string
  label: string
  handleSet: (event: any) => void
  values: IElementSelectValue[]
  modal?: boolean
  disabled?: boolean
  errorMessage: string
}

export interface IRadioForm {
  readonly label: string
  readonly name: string
  readonly value: string
  readonly labelOpt1: string
  readonly labelOpt2: string
  onChange?: (e: any) => void
  large?: boolean
}

export interface IElementInputCol {
  type: string
  name: string
  label: string
  value: string
  size: string
}

export interface IElementsInputRow {
  type: string
  name: string
  label: string
  values: any
}
