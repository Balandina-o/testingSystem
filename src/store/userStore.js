import { makeAutoObservable } from "mobx";

class UserStore {
  _user = {};
  _loggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }

  getUser(user) {
    return this._user;
  }

  setLoggedIn(loggedIn) {
    this._loggedIn = loggedIn;
  }

  getLoggedIn(loggedIn) {
    return this._loggedIn;
  }
}

export default new UserStore();
