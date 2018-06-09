import * as firebase from 'firebase';
export class AuthService {

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(
            error => console.log(error)
        )
    }

    signInUser(email: string, password: string) {
        console.log("Reached here");
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response => {console.log(response);
            console.log(this.getToken());}

        )
        .catch(
            error => console.log(error)
        )
    }
    getToken() {
        return firebase.auth;
    }
}
