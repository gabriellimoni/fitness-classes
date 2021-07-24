import { IBaseId } from '../baseTypes'
import { IClass } from './classTypes'

export * from './classTypes'

export class Class {
  constructor(private classData: Partial<IBaseId> & IClass) {}

  /**
   * Handle students starting and stopping;
   * Verify if data is valid;
   * etc...
   */
}
