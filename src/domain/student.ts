export interface IStudent {
  name: string
  documents: string
  birthDate: string
  heightInCentimeters?: number
  weightInKilograms?: number

  createdAt?: Date
  updateAt?: Date
}
