import { Router } from 'express';
import { CaseStudiesController } from '../controllers/caseStudiesController';

const router = Router();
const caseStudiesController = new CaseStudiesController();

router.get('/getAll', caseStudiesController.getAllCaseStudies);
router.post('/create', caseStudiesController.createCaseStudy);

export default router;
