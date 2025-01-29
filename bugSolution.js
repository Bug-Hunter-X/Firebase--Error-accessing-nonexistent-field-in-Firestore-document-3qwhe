The solution involves using optional chaining (`?.`) to gracefully handle cases where the field might not exist.  Here's how you can modify your code:

```javascript
const docRef = doc(db, 'collection', 'docId');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const city = docSnap.data().city?.toUpperCase(); // Optional chaining here
  console.log(city); // Will log undefined if 'city' doesn't exist
}
```
This approach avoids the error entirely by returning `undefined` if `city` is not found in the document's data.