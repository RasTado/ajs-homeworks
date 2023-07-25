export default class Validator {
  static checkExp = /^[a-zA-Z0-9_-]+$/;
  static checkUnExp = /\d{4}|^[\d_-]|[\d_-]$/;

  static validateUsername(username) {
    if (!Validator.checkExp.test(username)) {
      return false;
    }
    if (Validator.checkUnExp.test(username)) {
      return false;
    }

    return true;
  }
}
