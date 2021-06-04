
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
    let doc = this.userInfo.documents.find(o => o.name === document.name);
    if (doc) {
      doc.filename.push(document.filename)
      doc.filename = [...new Set(doc.filename)]
    }
    else {
      document.filename = [document.filename]
      this.userInfo.documents.push(document);
    }
  }
  removeDocs(i, j) {
    let doc = this.userInfo.documents[i];
    if (doc.filename.length == 1)
      this.userInfo.documents.splice(i, 1);
    else
      doc.filename.splice(j, 1)
  }

  getDocs() {
    return this.userInfo.documents;
  }
}
