import { Router } from "express"
import { CreateTaskController } from "./useCases/createTask/createTaskController"

const router = Router()

const createTaskController = new CreateTaskController()

router.post("/tasks", createTaskController.handle)

export { router }