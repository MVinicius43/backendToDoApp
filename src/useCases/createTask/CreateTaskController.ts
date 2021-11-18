import { Request, Response } from "express";
import { CreateTaskUseCase } from "./createTaskUseCase";

class CreateTaskController {

    async handle(request: Request, response: Response) {
        const { id, title } = request.body

        const createTaskUseCase = new CreateTaskUseCase()

        const task = await createTaskUseCase.execute({
            id,
            title
        })

        return response.json(task)
    }
}

export { CreateTaskController }