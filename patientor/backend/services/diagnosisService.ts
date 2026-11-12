import diagnosisData from "../src/data/diagnoses.ts";
import type {DiagnosisEntry} from "../src/types.ts";



const diagnoses: DiagnosisEntry[] = diagnosisData as DiagnosisEntry[];

 


const getDiagnoses = (): DiagnosisEntry[] => {
    return diagnosisData;
};

export default {
    getDiagnoses
};