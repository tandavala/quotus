## Register provider

Register provider inside `start/app.js` file.

```js
const providers = ["@adonisjs/sophos/providers/QuotusProvider"];
```

And then you can access it as follows

```javascript
const Sophos = use("Sophos");

Sophos.getQuote().then((quote) => {
  res.json(quote);
});
```

That's all folks! To get a random quote, we just have to follow the above instructions and call it like this in our code.
