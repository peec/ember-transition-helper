# ember-transition-helper [![Build Status](https://travis-ci.org/peec/ember-transition-helper.svg)](https://travis-ci.org/peec/ember-transition-helper) [![Ember Observer Score](http://emberobserver.com/badges/ember-transition-helper.svg)](http://emberobserver.com/addons/ember-transition-helper)


Do you want to do this?

`{{some-link click=(transition-to "test" 'arg-to-route')}}`

Then this addon is for you. This is a very simple addon that gives you access to a helper (`transition-to`).

## Requirements

Requires Ember `2.3.0+` ( we use `Ember.getOwner` API, which was introduced in 2.3.0 ).

#### Polyfill for getOwner:

if you don't have ember 2.3+ you can install a polyfill addon:
https://github.com/rwjblue/ember-getowner-polyfill

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
