import {History} from "./History";
import {Treatment} from "./Treatment";
import {Patient} from "./Patient";

export class Report implements History,Treatment{
    getPatientHistory(p0) {
    }

    treatmentPlan(patient: Patient): string {
        return "";
    }

    display(p0) {
    }

}
