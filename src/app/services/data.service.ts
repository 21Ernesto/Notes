import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

export interface Note{
  id?: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firebase: Firestore) { }

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firebase, 'notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }
  
  addNote(note: Note) {
    const notesRef = collection(this.firebase, 'notes');
    return addDoc(notesRef, note);
  }


}
