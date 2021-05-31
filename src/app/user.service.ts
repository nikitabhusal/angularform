
export class UserService {

  private userInfo: any = {
    documents: []
  };


  setUser(user) {
    this.userInfo = user;
  }

  getUser() {
    return this.userInfo;
  }


  addDocs(document) {
    this.userInfo.documents.push(document);
  }
  removeDocs(index) {
    this.userInfo.documents.splice(index, 1);;
  }

  getDocs() {
    return this.userInfo.documents;
  }
}
