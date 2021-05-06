import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private dbPath = '/posts';
  postsRef: AngularFirestoreCollection<[]> = null;

  constructor(db: AngularFirestore) {
    this.postsRef = db.collection(this.dbPath);
  }
  getPosts(): AngularFirestoreCollection {
    return this.postsRef;
  }
  getPost(id) {
    return this.postsRef.doc(id);
  }
}
