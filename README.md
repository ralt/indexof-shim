indexof-shim
===

Shims the indexOf method. Bonus: it works on NodeLists.

Installation
---

    npm install indexof-shim

API
---

```javascript
var indexOf = require('indexof-shim');

var arr = [1, 2, 3];

console.log(indexOf(arr, 2)); // 1
console.log(indexOf(arr, 4)); // -1
```

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
