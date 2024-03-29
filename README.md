<a id="x-28WEBLOCKS-NAVIGATION-WIDGET-3A-40README-2040ANTS-DOC-2FLOCATIVES-3ASECTION-29"></a>

# Weblocks Navigation Widget

<a id="weblocks-navigation-widget-asdf-system-details"></a>

## WEBLOCKS-NAVIGATION-WIDGET ASDF System Details

* Version: 0.7.0
* Description: A container widget which switches between children widgets when user changes an url.
* Licence: `BSD`
* Author: Alexander Artemenko <svetlyak.40wt@gmail.com>
* Homepage: [https://40ants.com/weblocks-navigation-widget/][2617]
* Bug tracker: [https://github.com/40ants/weblocks-navigation-widget/issues][9714]
* Source control: [GIT][db8b]
* Depends on: [40ants-doc][2c00], [docs-config][ce67], [log4cl][7f8b], [weblocks][ff33], [weblocks-ui][0b15]

<a id="introduction"></a>

## Introduction

This addon for Weblocks frameworks allows you to define which widgets should be
shown to the user dependening on `URL`'s path.

The main entry-point is [`defroutes`][212c] macro. Use it to define a subclass of
navigation widget and then return this widget from the session initialization
method of your Weblocks application.

<a id="api"></a>

## API

<a id="x-28WEBLOCKS-NAVIGATION-WIDGET-3ADEFROUTES-20-2840ANTS-DOC-2FLOCATIVES-3AMACRO-29-29"></a>

## [macro](e4c0) `weblocks-navigation-widget:defroutes` class-name &rest rules

Defines a new class with name `CLASS-NAME`, inherited from [`navigation-widget`][8262].

And a function `make-{class-name}` to make instances of this class.

Each entry in rules should be a list of two items. First item is a regex pattern to match `URL` path.
Second item is a form to create a widget. A new widget will be created only if `URL`
was changed.

Here is an example of a widget with two rules:

```
(defroutes tasks-routes
        ("/tasks/d+" (make-task-page))
        ("/tasks/" (make-task-list "Make my first Weblocks app"
                                   "Deploy it somewhere"
                                   "Have a profit")))
```
With these rules, when user opens `URL` `/tasks/` a widget returned by `MAKE-TASK-LIST`
will be set as [`current-widget`][9b62] and shown to the user. If user clicks on some task
and `URL` change to `/tasks/100500`, then a widget for a task will be created by a call
to `MAKE-TASK-PAGE`.

**Pay attention** that widget creation form is responsible for extraction of the parameters
from the `URL`. In above case, `MAKE-TASK-PAGE` should call `WEBLOCKS/REQUEST:GET-PATH` and
parse path to extract task's id. Probably this will change in future defroutes will catch
matched path pieces.

<a id="x-28WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-20CLASS-29"></a>

## [class](8cd6) `weblocks-navigation-widget:navigation-widget` (ui-widget)

Base class for all navigation widgets.

When rendered it tracks if `URL` was changed and
creates a new child widget according to given navigation rules.

Usually you don't want to inherit from this class manually,
but instead use [`defroutes`][212c] macro.

<a id="x-28WEBLOCKS-NAVIGATION-WIDGET-3ACURRENT-WIDGET-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29"></a>

## [reader](a8ba) `weblocks-navigation-widget:current-widget` (navigation-widget) (= nil)

<a id="x-28WEBLOCKS-NAVIGATION-WIDGET-3ACURRENT-PATH-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29"></a>

## [reader](15fc) `weblocks-navigation-widget:current-path` (navigation-widget) (= nil)

<a id="x-28WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-RULES-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29"></a>

## [reader](36fa) `weblocks-navigation-widget:navigation-rules` (navigation-widget) (:rules)


[2617]: https://40ants.com/weblocks-navigation-widget/
[9b62]: https://40ants.com/weblocks-navigation-widget/#x-28WEBLOCKS-NAVIGATION-WIDGET-3ACURRENT-WIDGET-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29
[212c]: https://40ants.com/weblocks-navigation-widget/#x-28WEBLOCKS-NAVIGATION-WIDGET-3ADEFROUTES-20-2840ANTS-DOC-2FLOCATIVES-3AMACRO-29-29
[8262]: https://40ants.com/weblocks-navigation-widget/#x-28WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-20CLASS-29
[db8b]: https://github.com/40ants/weblocks-navigation-widget
[e4c0]: https://github.com/40ants/weblocks-navigation-widget/blob/831421ff14f08133952f8f6ac69b0a2110d77ce5/src/core.lisp#L122
[8cd6]: https://github.com/40ants/weblocks-navigation-widget/blob/831421ff14f08133952f8f6ac69b0a2110d77ce5/src/core.lisp#L72
[a8ba]: https://github.com/40ants/weblocks-navigation-widget/blob/831421ff14f08133952f8f6ac69b0a2110d77ce5/src/core.lisp#L73
[15fc]: https://github.com/40ants/weblocks-navigation-widget/blob/831421ff14f08133952f8f6ac69b0a2110d77ce5/src/core.lisp#L75
[36fa]: https://github.com/40ants/weblocks-navigation-widget/blob/831421ff14f08133952f8f6ac69b0a2110d77ce5/src/core.lisp#L77
[9714]: https://github.com/40ants/weblocks-navigation-widget/issues
[2c00]: https://quickdocs.org/40ants-doc
[ce67]: https://quickdocs.org/docs-config
[7f8b]: https://quickdocs.org/log4cl
[ff33]: https://quickdocs.org/weblocks
[0b15]: https://quickdocs.org/weblocks-ui

* * *
###### [generated by [40ANTS-DOC](https://40ants.com/doc/)]
