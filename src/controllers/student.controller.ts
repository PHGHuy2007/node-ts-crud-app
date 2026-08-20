import { Request, Response } from 'express';
import { StudentService } from '../services/student.service';
import { MongoStudentRepository } from '../repositories/mongo-student.repository';
export class StudentController {
  private service: StudentService;
  constructor() {
    const repository = new MongoStudentRepository(); 
    this.service = new StudentService(repository);
  }
  public create = async (req: Request, res: Response) => {
    try {
      const data = await this.service.createStudent(req.body);
      res.status(201).json({ success: true, data });
    } catch (e: any) { res.status(400).json({ error: e.message }); }
  };
  public getAll = async (req: Request, res: Response) => {
    const data = await this.service.getAllStudents();
    res.json({ success: true, data });
  };
}