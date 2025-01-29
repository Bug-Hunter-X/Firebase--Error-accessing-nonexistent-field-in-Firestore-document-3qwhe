# Firebase: Error accessing nonexistent field in Firestore document

This repository demonstrates a common error in Firebase when attempting to access a field that does not exist within a Firestore document.  The error can be subtle and difficult to debug, especially in larger applications.

## Bug
The provided `bug.js` file showcases the problem: accessing a non-existent field results in an error.  This can lead to unexpected crashes or failures in your application.

## Solution
The solution, presented in `bugSolution.js`, involves using optional chaining (`?.`) to safely access the field. If the field is undefined, the expression will return undefined instead of throwing an error, preventing application crashes and making the code more robust.

## How to reproduce the bug:
1. Clone this repo.
2. Run `bug.js` (requires Firebase initialization).  You'll encounter an error if the document doesn't contain the field 'city'.
3. Run `bugSolution.js` to see how to use optional chaining to handle the potential absence of the field gracefully.