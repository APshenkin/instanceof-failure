# instanceof-failure

Just a simple example of failed `instanceof` check when different filename letter cases are used in `imports`.

Repoduced on Mac OS.

So here we have `error.js` file that is imported in `app.js` and `data.js`

But in `app.js` it will be imported with lowercase letters and in `data.js` it will be imported with a capital letter.

In `app.js` we create instance of error from `error.js` and pass it to Data instance.
In Data instance we try to check `instanceof`  but it will fail. BTW if you fix import (it should equal with `app.js` import) then `instanceof` check will pass.
