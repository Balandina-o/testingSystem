import { makeAutoObservable } from "mobx";

class AllUsersStore {
  usersList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users) {
    this.usersList = users;
  }
}

export default AllUsersStore;
