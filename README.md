# Logger.js

A simple, cross platform logging utility for Javascript development in desktop web browsers.

An alternative to having to pick through each of the debugging utilities in each of the browser implementations when developing cross platform, cross browser compliant Javascript.

Currently, this library only supports desktop web browsers and printing logging messages to the screen.

Works with **IE from 6 and up**.

## Features

The Logger instance will open a new browser window and print the logging messages in reverse order (the most recent at the top of the window).  Multiple Logger instances will write to the same window in the order in which that they attempt to append their data to the DOM in an asynchronous fashion. In most browsers, multiple windows and tabs will write to the same pop-up/output window.

## Usage

To utilize the Logger class:

* Do a minor bit of tweaking to the browsers in your test bed:

	- You must enable pop-ups in the browser, and/or for the domain on which you are developing.  **Safari** does not prompt you if you want to allow pop-ups, it just blocks them and the Logger fails silently.

* Add the following set of conditional meta tags for IE
```
<!--[if lt IE 7 ]> <meta name="ie_version" content="6" /> <![endif]-->
<!--[if IE 7 ]>    <meta name="ie_version" content="7" /> <![endif]-->
<!--[if IE 8 ]>    <meta name="ie_version" content="8" /> <![endif]-->
<!--[if IE 9 ]>    <meta name="ie_version" content="9" /> <![endif]-->
<!--[if IE 9 ]>    <meta name="ie_version" content="10" /> <![endif]-->
<!--[if IE 9 ]>    <meta name="ie_version" content="11" /> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><![endif]-->
```

* Declare a namespace object on your page (or in your top level js include) for the Logger object defintion:
```
<script type="text/javascript">
	var com = new Object.create(null);
	com.ryanchapin = new Object.create(null)
	com.ryanchapin.logger = new Object.create(null);
</script>
```

* Include the script source via a `<script>` tag:
```
<script src="Logger.js" type="text/javascript"></script>
``` 

* Instantiate a Logger instance on your page, or in your  Javascript objects:
```
var $logger = new com.ryanchapin.logger.Logger('LoggerInstanceName');
```

* Set a logging level for your Logger instance:
```
$logger.setLogLevel('TRACE');
```

* Output logging/debugging messages by calling the `Logger.trace`, `Logger.debug`, `Logger.info`, `Logger.warn`, `Logger.error`, or `Logger.fatal` methods:
```
$logger.trace('This is a message that I want to output for var $foo: ' + $foo);
```
And, assuming that `$foo == 'blah'`, and that you named the instance 'LoggerInstanceName', the following will be written to the output window for the logger:
```
DATE: 2013-08-00 21:28:56:310 (LoggerInstanceName) [TRACE] - This is a message that I want to output for var $foo: blah
```

## Roadmap

* Decouple the output of the log messages so that I can write to either a browser window, file, web service, socket, etc..

* Refactor such that the same library will work on both desktop and mobile browsers

## Known Issues

* Chrome will not write to the same pop-up window between different parent browser windows, or tabs.  Each tab, or window will write to it's own pop-up.


Questions or Comments
---------------------

If you have any questions or comments, please contact Ryan via http://www.ryanchapin.com/contact.html.
