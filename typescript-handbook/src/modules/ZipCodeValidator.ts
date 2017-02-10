export const numberRegexp = /a/;
import {StringValidator} from "./StringValidator";

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return true;
    }
}

export {ZipCodeValidator}
export {ZipCodeValidator as mainValidator}