To solve this, ensure Firebase is fully initialized before making any calls to its services. Use promises or async/await to handle the asynchronous nature of the initialization:
```javascript
// Correct initialization with async/await
async function initializeFirebase() {
  try {
    await firebase.initializeApp(firebaseConfig); // Wait for initialization to complete
    const user = await firebase.auth().currentUser; // Access auth after initialization
    console.log(user);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

initializeFirebase();
```

Alternatively, using `.then()`:
```javascript
firebase.initializeApp(firebaseConfig).then(() => {
  firebase.auth().currentUser.then(user => {
      console.log(user)
  })
}).catch(error => {
  console.error('Firebase initialization error:', error);
});
```