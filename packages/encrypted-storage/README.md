# @nativescript/encrypted-storage

## Installation

From the command prompt go to your app's root folder and execute:

#### NativeScript 7 and later

```bash
ns plugin add @nativescript/encrypted-storage
```

## Usage

This is a fork of the [@Nativescript/secure-storage](https://github.com/EddyVerbruggen/nativescript-secure-storage) updated to use [EncryptedSharedPrefereces](https://developer.android.com/reference/androidx/security/crypto/EncryptedSharedPreferences).

These APIs are designed to set/retrieve strings so:

__PRO TIP:__ Want to store objects instead of strings? Use `JSON.stringify` with `set` and `JSON.parse` with `get`.

## API

### `set` | `setSync`
> "In order to GET something you first need to SET it."
>
> -- _Eddy Verbruggen_

##### JavaScript
```js
// require the plugin
var SecureStorage = require("nativescript-secure-storage").SecureStorage;

// instantiate the plugin
var secureStorage = new SecureStorage();

// async
secureStorage.set({
  key: "foo",
  value: "I was set at " + new Date()
}).then(
  function(success) {
    console.log("Successfully set a value? " + success);
  }
);

// sync
var success = secureStorage.setSync({
  key: "foo",
  value: "I was set at " + new Date()
});
```

##### TypeScript
```typescript
// require the plugin
import { SecureStorage } from "nativescript-secure-storage";

// instantiate the plugin
let secureStorage = new SecureStorage();

// async
secureStorage.set({
  key: "foo",
  value: "I was set at " + new Date()
}).then(success => console.log("Successfully set a value? " + success));

// sync
const success = secureStorage.setSync({
  key: "foo",
  value: "I was set at " + new Date()
});
```

### `get` | `getSync`
Will return `null` if not found.

##### JavaScript
```js
// async
secureStorage.get({
  key: "foo"
}).then(
  function(value) {
    console.log("Got value: " + value);
  }
);

// sync
var value = secureStorage.getSync({
  key: "foo"
});
```

##### TypeScript
```typescript
// async
secureStorage.get({
  key: "foo"
}).then(value => console.log("Got value: " + value));

// sync
const value = secureStorage.getSync({
  key: "foo"
});
```

### `remove` | `removeSync`

##### JavaScript
```js
// async
secureStorage.remove({
  key: "foo"
}).then(
  function(success) {
    console.log("Removed value? " + success);
  }
);

// sync
var success = secureStorage.removeSync({
  key: "foo"
});
```

##### TypeScript
```typescript
// async
secureStorage.remove({
  key: "foo"
}).then(success => console.log("Successfully removed a value? " + success));

// sync
const success = secureStorage.removeSync({
  key: "foo"
});
```

### `removeAll` | `removeAllSync`

##### JavaScript
```js
// async
secureStorage.removeAll().then(
  function(success) {
    console.log("Removed value? " + success);
  }
);

// sync
var success = secureStorage.removeAllSync();
```

##### TypeScript
```typescript
// async
secureStorage.removeAll().then(success => console.log("Successfully removed a value? " + success));

// sync
const success = secureStorage.removeAllSync();
```

### `clearAllOnFirstRun` | `clearAllOnFirstRunSync`
These functions can be used if you want to clear data when your app is reinstalled.

This is only really useful **on iOS** because if you write something (through this plugin) to the Keychain, this data **won't** be removed when the app is uninstalled.
So the next time the same app is installed, it will find the data in the keychain.

So if you want to clear 'lingering' data from a previous install, make sure you run one of these
methods before using other methods this plugin provides.

##### JavaScript
```js
// async
secureStorage.clearAllOnFirstRun().then(
  function(success) {
      console.log(success ? "Successfully removed all data on the first run" : "Data not removed because this is not the first run");
  }
);

// sync
var success = secureStorage.clearAllOnFirstRunSync();
```

##### TypeScript
```typescript
// async
secureStorage.clearAllOnFirstRun().then(success => {
    console.log(success ? "Successfully removed all data on the first run" : "Data not removed because this is not the first run");
});

// sync
const success = secureStorage.clearAllOnFirstRunSync();
```

### `isFirstRun` | `isFirstRunSync`
As a bonus, you can piggyback the 'first run' mechanism to do anything you want when the plugin detects
this is the first run (after an install or install-delete-reinstall).

##### TypeScript
```typescript
// sync
if (secureStorage.isFirstRunSync()) {
  // do whatever you want
}

// async
secureStorage.isFirstRun().then(isFirst => {
  // if isFirst is true, do whatever you like
});
```

## Usage with Angular

In your view:

```html
<Button text="set secure value" (tap)="setSecureValue()"></Button>
```

In your `@Component`:

```typescript
import { SecureStorage } from "nativescript-secure-storage";

export class MyComponent {
  secureStorage = new SecureStorage();

  // a method that can be called from your view
  setSecureValue() {
    this.secureStorage.set({
      key: 'myKey',
      value: 'my value'
    }).then(success => { console.log(success)});
  }
}
```
## iOS Security++
By default the plugin uses `kSecAttrAccessibleAlwaysThisDeviceOnly` access control to the keychain. This means that the keychain value can be accessed even if the device is locked. If you want to enhance security and you do not need background access, or if you want to allow the value to be backed up and migrated to another device, you can use any of keys defined [here](https://developer.apple.com/documentation/security/ksecattraccessiblealwaysthisdeviceonly?language=objc#see-also) and pass it when you create an instance of `SecureStorage`, for example
```ts
declare const kSecAttrAccessibleWhenUnlockedThisDeviceOnly; // This is needed in case you don't have tns-platform-declarations module installed. 
const secureStorage = new SecureStorage(kSecAttrAccessibleWhenUnlockedThisDeviceOnly);
```

## iOS Simulator

Currently this plugin defaults to using `NSUserDefaults` on **iOS Simulators**. You can change this behaviour by providing `disableFallbackToUserDefaults` to the constructor of `SecureStorage`. This then uses the keychain instead of `NSUserDefaults` on simulators.

If you're running into issues similar to [issue_10](https://github.com/EddyVerbruggen/nativescript-secure-storage/issues/10), consider using the default behaviour again.

## Credits
* This builds upon   [@Nativescript/secure-storage](https://github.com/EddyVerbruggen/nativescript-secure-storage) by Eddy Verbruggen. The original license is viewable [here](licenses/nativescript-secure-storage)
* On __iOS__ we're leveraging the KeyChain using the [SAMKeychain](https://github.com/soffes/SAMKeychain) library (on the Simulator `NSUserDefaults`),
* On __Android__ we're using [androidx.security:security-crypto](https://developer.android.com/jetpack/androidx/releases/security) library which internally uses [Facebook conceal](https://github.com/facebook/conceal).
* Thanks, [Prabu Devarrajan](https://github.com/prabudevarrajan) for [adding the `deleteAll` function](https://github.com/EddyVerbruggen/nativescript-secure-storage/pull/11)!

## License

Apache License Version 2.0