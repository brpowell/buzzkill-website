import * as firebase from "firebase-admin";

export const getFirebase = () => {
  if (firebase.apps.length === 0) {
    let options: firebase.AppOptions = {
      projectId: process.env.FIREBASE_PROJECT_ID,
    };

    if (process.env.FIREBASE_PRIVATE_KEY) {
      const serviceAccount = JSON.parse(
        process.env.FIREBASE_PRIVATE_KEY as string
      );
      options = {
        credential: firebase.credential.cert(serviceAccount),
      };
    }

    firebase.initializeApp(options);
  }
  return firebase;
};

// export const db = getFirebase().firestore();
