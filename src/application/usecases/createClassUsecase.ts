import { Class } from '@/domain'
import { ClassRepository } from '../repositories/classRepository'

export interface CreateClassUsecase {
  createClass: (aClass: Class) => Promise<Class>
}

export class CreateClassImplementation implements CreateClassUsecase {
  constructor(private readonly classRepository: ClassRepository) {}

  async createClass(aClass: Class): Promise<Class> {
    const createdClassId = await this.classRepository.create(
      aClass.getClassData(),
    )
    const createdClassData = await this.classRepository.getById(createdClassId)
    return new Class(createdClassData)
  }
}
