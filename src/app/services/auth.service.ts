import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CreateUser } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo:Apollo,
  ) { }



  /**
   * CreateUser
   */
  public CreateUser(user:CreateUser) {
    return this.apollo.mutate({mutation:gql`
    mutation CreateUser($user: CreateUserInput!) {
      createUser(user: $user) {
        id
        email
        name
      }
    }`,variables:{user}})
  }


  /**
   * GetUser
   */
  public GetUser(email:string,password:String) {
    return this.apollo.query({query:gql`query Query($email: String!, $password: String!) {
      getUser(email: $email, password: $password) {
        email
        id
        name
      }
    }`,variables:{email,password}})
  }
}
