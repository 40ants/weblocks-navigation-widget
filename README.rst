=================
 weblocks-navigation-widget
=================

.. Everything starting from this commit will be inserted into the
   index page of the HTML documentation.
.. include-from

A routing widget for Weblocks, which changes its children when the
user goes to another URL.


Usage
=====

To create a routing mechanism for your app, use the ``defroute`` widget::

.. code-block:: common-lisp

    (defroutes tasks-routes
      ("/tasks/" (make-tasks-list))
    ("/tasks/task/\\d+" (make-task)))

It associates an url, which can contain a regexp, to a widget.

Important: the navigation widget must return a new widget everytime a route is changed.

Inside the child widget, you can read the url parameters back with
``(weblocks/request:get-path)``, which returns a string. Then you can
extract the url parameter by matching the parameter regexp against it. For
example::

.. code-block:: common-lisp

  (defun make-task ()
    (let* ((path (weblocks/request:get-path))
         (id (first (ppcre:all-matches-as-strings "\\d+" path)))
         (task (find-task :id id)))
      (format t "The task with id ~a is ~a~&" id task)
      (make-tasks-list :task task)))

Now define the route widget as the main widget of your app.  The
``defroutes <name>`` macro has automatically created a ``make-<name>``
function to create the route widget.

.. code-block:: common-lisp
    (defmethod weblocks/session:init ((app tasks))
        (declare (ignorable app))
        (make-tasks-routes))



.. Everything after this comment will be omitted from HTML docs.
.. include-to
