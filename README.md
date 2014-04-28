vertically-centered-element
===========================

Directive to dynamically add absolute position to a targeted element and to position it vertically centered.

Dependencies
============
To use this directive in your projects, you must include its dependencies. Asumming you already have angular and jquery libraries included in your project, you're going to need the main directive file: VerticallyCenteredElement.js

Usage
=====
Once you've checked that everything is in place, you can use this directive like so:

```html
<div vertically-centered-element centering-animation="500">centered element</div>
```

or

```html
<vertically-centered-element centering-animation="500">
    <div>centered element</div>
</vertically-centered-element>
```

Parameters
==========
centering-animation

It dictates if an animation should be used to vertically center an element. Value should be given in milliseconds.


Demo
====
http://plnkr.co/edit/f0OnoZsiFFcKplUvnNa6?p=info

http://embed.plnkr.co/f0OnoZsiFFcKplUvnNa6/preview