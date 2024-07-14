import { Router } from 'express';
import { CaseStudiesController } from '../controllers/caseStudiesController';

const router = Router();
const caseStudiesController = new CaseStudiesController();

router.put('/getAllCards', caseStudiesController.getAllCaseStudyCards);
router.put('/getCaseStudyQuestion', caseStudiesController.getCaseStudyQuestion);
router.post('/create', caseStudiesController.createCaseStudy);

export default router;
