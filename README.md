# ember-transition-helper [![Build Status](https://travis-ci.org/peec/ember-transition-helper.svg)](https://travis-ci.org/peec/ember-transition-helper) [![Ember Observer Score](http://emberobserver.com/badges/ember-transition-helper.svg)](http://emberobserver.com/addons/ember-transition-helper)

Do you want to do this?

```handlebars
{{some-link click=(transition-to "test" 'arg-to-route')}}
```

Then this addon is for you. This is a very simple addon that gives you access to a helper (`transition-to`).

## Requirements

Requires Ember `2.3.0+` ( we use `Ember.getOwner` API, which was introduced in 2.3.0 ).

#### Polyfill for getOwner:

if you don't have ember 2.3+ you can install a polyfill addon:
https://github.com/rwjblue/ember-getowner-polyfill

# Installation

To use the `transition-to` helper provided by this addon from within your Ember application,
execute the following command from the root of your project:

```
$ ember install ember-transition-helper
```

# License

This project is licensed under the [MIT License](LICENSE.md).
