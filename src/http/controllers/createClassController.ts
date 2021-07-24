import { CreateClassUsecase } from '@/application/usecases/createClassUsecase'
import { Class } from '@/domain'
import { BaseController, HttpRequest, HttpResponse } from '../protocols'

export class CreateClassController implements BaseController {
  constructor(private readonly createClassUsecase: CreateClassUsecase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const aClass = new Class(request.body)
    const createdClass = await this.createClassUsecase.createClass(aClass)
    return {
      status: 201,
      data: createdClass,
    }
  }
}
