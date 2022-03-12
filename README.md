ember-transition-helper
==============================================================================

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpeec%2Fember-transition-helper%2Fbadge&style=flat)](https://actions-badge.atrox.dev/peec/ember-transition-helper/goto)
[![Ember Observer Score](https://emberobserver.com/badges/ember-transition-helper.svg)](https://emberobserver.com/addons/ember-transition-helper)
[![NPM package info for ember-transition-helper](https://img.shields.io/npm/dm/ember-transition-helper.svg)](http://npmjs.com/package/ember-transition-helper)

Installation
------------------------------------------------------------------------------

To use the `transition-to` helper provided by this addon from within your Ember application,
execute the following command from the root of your project:

```
ember install ember-transition-helper
```

Usage
------------------------------------------------------------------------------
Ember makes it pretty easy to do something like this out of the box:
```handlebars
<LinkTo @route="some-route" @model="arg-to-route"}} />
```

But sometimes it'd be nice to put that functionality elsewhere in the template without having to add code to the
corresponding controller or component. This addon provides a helper that allows you to do this, e.g.

```handlebars
<TimerComponent @whenDone={{transition-to "some-other-route" "arg-to-route"}} />
```

```handlebars
<button type="button" {{on "click" (transition-to "tabs" queryParams=(hash tab="hello"))}}>Go to hello tab</button>
```

Note: This addon is very old (started on 2/4/2016 with ember-cli 2.3.0-beta.1) and not generally needed since
the advent of the [RouterService](https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md)
and [Ember Octane](https://emberjs.com/editions/octane/).
Nevertheless, it may still be handy.

It's probably most clear to simply look at [the code](./addon/helpers/transition-to.js).
Positional parameters are passed directly to [`RouterService::transitionTo`](https://api.emberjs.com/ember/4.1/classes/RouterService/methods/transitionTo?anchor=transitionTo).
The following named parameters are accepted:

* `queryParams` - hash of key/value pairs to pass as query parameters to `RouterService::transitionTo`
* `preventDefault` - if set/truthy, helper will call `event.preventDefault()` before initiating the transition.

Requirements
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above

For older versions of Ember, use v1.x of this addon.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
