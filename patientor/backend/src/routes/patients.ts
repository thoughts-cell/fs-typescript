import express from 'express';
import patientService from '../services/PatientServices.ts';
import { NonSensitivePatientEntry, Patient } from '../types.ts';
 
const router = express.Router();
router.get('/', (_req, res) => {
    const data: NonSensitivePatientEntry[] = patientService.getNonSensitiveEntries();
    res.send(data);
});

router.get('/:id', (req, res) => {
   const data = patientService.findById(req.params.id);
    return data ? res.send(data) : res.sendStatus(404).json({ error: 'Patient not found' });
});
 