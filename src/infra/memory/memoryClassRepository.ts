import { ClassRepository } from '@/application/repositories/classRepository'
import { IBaseId, IClass } from '@/domain'

const classes: (IBaseId & IClass)[] = []

export class MemoryClassReporitory implements ClassRepository {
  async create(classData: IClass): Promise<string> {
    const newId = `${Date.now()}`
    classes.push({
      ...classData,
      id: newId,
    })
    console.log(classes)
    return newId
  }

  async getById(id: string): Promise<IBaseId & IClass> {
    const foundClass = classes.find((c) => c.id === id)
    if (!foundClass) throw new Error(`Not found class by id ${id}`)
    return foundClass
  }
}
