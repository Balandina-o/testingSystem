import { makeAutoObservable } from "mobx";

class UsersStore {
  _user = {};
  _loggedIn = false;
  _isAdmin = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  setLoggedIn(loggedIn) {
    console.log(loggedIn);
    this._loggedIn = loggedIn;
  }

  get loggedIn() {
    return this._loggedIn;
  }

  setIsAdmin(isAdmin) {
    this._isAdmin = isAdmin;
    console.log("admin? ", this._isAdmin);
  }

  get isAdmin() {
    return this._isAdmin;
  }
}

export default UsersStore;
