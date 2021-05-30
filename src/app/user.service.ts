
export class UserService {

  private userInfo: any = {};


  setUser(user) {
    this.userInfo = user;
  }

  getUser() {
    return this.userInfo;
  }
  setDocs(documents) {
    this.userInfo.documents = documents;
  }

  getDocs() {
    return this.userInfo.documents;
  }
}
