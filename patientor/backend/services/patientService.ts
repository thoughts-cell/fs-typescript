import data from '../src/data/patients.ts';

import type { Patient, NonSensitivePatientEntry, NewPatientEntry } from '../src/types.ts';
const patientEntries: Patient[] = data as Patient[];

const getEntries = ():Patient[] => {       
    return patientEntries;
}

