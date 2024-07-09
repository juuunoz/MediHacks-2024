import { Router } from 'express';
import { CaseStudiesController } from '../controllers/caseStudiesController';

const router = Router();
const caseStudiesController = new CaseStudiesController();

router.get('/', caseStudiesController.getAllCaseStudies);
router.post('/', caseStudiesController.createCaseStudy);

export default router;