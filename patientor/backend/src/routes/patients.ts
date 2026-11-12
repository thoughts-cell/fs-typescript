import express from 'express';
import patientService from '../services/PatientServices.ts';
import { NonSensitivePatientEntry, Patient } from '../types.ts';
 

const router = express.Router();
