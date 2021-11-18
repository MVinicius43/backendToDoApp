import { client } from '../../prisma/client'

interface ITaskRequest {
    id: string;
    title: string;
}

class CreateTaskUseCase {

    async execute({ id, title }: ITaskRequest) {
        const task = await client.task.create({
            data: {
                id,
                title
            }
        })

        return task
    }
}

export { CreateTaskUseCase }