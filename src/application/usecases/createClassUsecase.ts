import { Class, IClass } from '@/domain'
import { ClassRepository } from '../repositories/classRepository'

export interface CreateClassUsecase {
  createClass: (classData: IClass) => Promise<Class>
}

export class CreateClassImplementation implements CreateClassUsecase {
  constructor(private readonly classRepository: ClassRepository) {}

  async createClass(classData: IClass): Promise<Class> {
    const aClass = new Class(classData)
    const createdClassId = await this.classRepository.create(
      aClass.getClassData(),
    )
    const createdClassData = await this.classRepository.getById(createdClassId)
    return new Class(createdClassData)
  }
}
