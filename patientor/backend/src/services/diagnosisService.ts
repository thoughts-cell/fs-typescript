import diagnosisData from "../data/diagnoses.ts";
import type {DiagnosisEntry} from "../types.ts";



const diagnoses: DiagnosisEntry[] = diagnosisData as DiagnosisEntry[];

 


const getDiagnoses = (): DiagnosisEntry[] => {
    return diagnosisData;
};

export default {
    getDiagnoses
};