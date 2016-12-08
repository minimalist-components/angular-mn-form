<!-- [![Bower version](https://badge.fury.io/bo/angular-mn-form.svg)](https://badge.fury.io/bo/angular-mn-form)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) -->   


# angular-mn-form

An angular directive to [mn-form](https://github.com/minimalist-components/mn-form)

<!-- See the [demo](http://codepen.io/darlanmendonca/full/akgXQq) -->

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-form/master/sources/example/mn-form.gif)](http://codepen.io/darlanmendonca/full/akgXQq)

### Install

With bower

```sh
bower install --save angular-mn-form
```

Or just download the main files ```dist/mn-form.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/vendor.css">
<script src="path/to/vendor.js"></script>
<script src="path/to/mn-form.js"></script>
```

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-form'
]);
```

And then, in your html, you can use the tag:

```html
<mn-form name="form" submit='controller.save()'>
  <!-- content of form here, inputs, textarea, select, buttons, etc -->
</mn-form>
```

Note, the `submit` directive, will check validity of form, and only if is valid, they call your method (controller.save in example). Is similar to `submit='form.$valid && controller.save'`, but you dont need write `form.$valid`, this is implicit in `submit` directive.


For more details check docs [mn-form docs](https://github.com/minimalist-components/mn-form).

