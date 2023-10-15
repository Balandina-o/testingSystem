import { makeAutoObservable } from "mobx";

class AllUsersStore {
  usersList = [];
  _isAdmin = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users) {
    this.usersList = users;
  }

  setParticularUser(users) {
    this.usersList = users;
  }
}

export default AllUsersStore;
