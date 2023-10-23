export default class ApiConstants {
  static ROOT_URL = 'http://localhost:5000';
  static API_URL = this.ROOT_URL + '/api';
  static JOBS = this.API_URL + '/jobs';
  static APPLY_JOB = this.JOBS + '/apply';
}
