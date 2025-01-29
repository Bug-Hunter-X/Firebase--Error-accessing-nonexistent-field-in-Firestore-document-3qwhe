The Firebase SDK may throw an error if you try to access a field that doesn't exist in your database.  For example, if you have a document with a structure like this:
```json
{
  "name": "Example",
  "age": 30
}
```
and you try to access the `city` field using `doc.data().city`, you will get an error.  This is particularly troublesome because it can be difficult to track down in larger apps.