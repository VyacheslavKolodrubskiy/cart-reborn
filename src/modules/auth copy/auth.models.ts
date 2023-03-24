export interface Form {
  phone: string
  password: string
}

export interface RequestForm extends Pick<Form, 'phone'> {}
