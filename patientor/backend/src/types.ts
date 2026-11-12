

 export interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;

    diagnosisCodes?: Array<DiagnosisEntry['code']>;
}



export interface DiagnosisEntry{
    code: string;
    name: string;
    latin?: string;
}  
export interface SickLeave {
    startDate: string,
    endDate: string,
}
export interface Discharge {
    date: string;
    criteria: string;
}
interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge: Discharge;
}
export enum HealthCheckRating {
    Healthy = 1,
    LowRisk = 2,
    HighRisk = 3,
    CriticalRisk = 4
}
interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: SickLeave;
}
interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export type Entry =
    | HospitalEntry
    | OccupationalHealthcareEntry
    | HealthCheckEntry;

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: 'male' | 'female' | 'other';
    occupation: string;
    entries: DiagnosisEntry[];
}   

export enum Gender {

    Male = 'male',
    Female = 'female',
    Other = 'other'
}
export type NonSensitivePatientEntry = Omit<Patient, 'ssn'|'DiagnosisEntry'>;

export type NewPatientEntry = Omit<Patient, 'id'>;
