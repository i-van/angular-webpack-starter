import angular from 'angular';
import Navbar from './navbar/navbar';
import formInput from './form-input/form-input';
import formInputMatch from './form-input-match/form-input-match';
import formInputUnique from './form-input-unique/form-input-unique';
import User from './user/user';
import Auth from './auth/auth';

let commonModule = angular.module('app.common', [
  Navbar.name,
  formInput.name,
  formInputMatch.name,
  formInputUnique.name,
  User.name,
  Auth.name
]);

export default commonModule;
