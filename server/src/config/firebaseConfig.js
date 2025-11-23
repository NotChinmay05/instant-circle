import admin from "firebase-admin";
import serviceAccount from "../../firebaseServiceAccount.json"  with { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };

