import { IBaseId } from '../baseTypes'
import { IClass } from './classTypes'

export * from './classTypes'

export class Class {
  constructor(private classData: Partial<IBaseId> & IClass) {
    this.validateClassData()
  }

  /**
   * Throws if any data is invalid
   */
  validateClassData(): void {
    // todo
  }

  getClassData(): Partial<IBaseId> & IClass {
    return this.classData
  }

  /**
   * Handle students starting and stopping;
   * Verify if data is valid;
   * etc...
   */
}
