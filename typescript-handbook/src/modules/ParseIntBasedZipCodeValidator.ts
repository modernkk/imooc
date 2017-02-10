export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string): boolean {
        return true;
    }
}

export {ZipCodeValidator as RegExpBasedZipCodeValidator} from './ZipCodeValidator'
export * from "./StringValidator"
