import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public users : BehaviorSubject<string[]>  = new BehaviorSubject([])

  public addUser(user){
    this.users.next([...this.users.value,user])
  }
}
