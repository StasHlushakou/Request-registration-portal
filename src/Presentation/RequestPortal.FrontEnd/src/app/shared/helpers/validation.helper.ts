export class ValidationHelper {
  static readonly emailWithDomainRegexPattern: RegExp =
    /^[\p{L}\p{N}._%+'’-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,4}$/u;
}
