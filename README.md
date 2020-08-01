# instanceof-failure

Just a simple example of failed `instanceof` check when different filename letter cases are used in `imports`.

Repoduced on Mac OS.

So here we have `error.ts` file that is imported in `app.ts` and `data.ts`

But in `app.ts` it will be imported with lowercase letters and in `data.ts` it will be imported with a capital letter.

This code will be succussfully compiled with TypeScript.

In `app.ts` we create instance of error from `error.ts` and pass it to Data instance.
In Data instance we try to check `instanceof`  but it will fail. BTW if you fix import (it should equal with `app.ts` import) then `instanceof` check will pass.
