# Logger.js

A simple, cross platform logging utility for Javascript development in desktop web browsers.

An alternative to having to pick through each of the debugging utilities in each of the browser implementations when developing cross platform, cross browser compliant Javascript.

Currently, this library only supports desktop web browsers and printing logging messages to the screen.

## Features

The Logger instance will open a new browser window and print the logging messages in reverse order (the most recent at the top of the window).  Multiple Logger instances will write to the same window in the order in which that they attempt to append their data to the DOM in an asynchronous fashion. In most browsers, multiple windows and tabs will write to the same pop-up/output window.

## Requires
* jQuery 1.7 or greater:  http://www.jquery.com/download/

## Usage

To utilize the Logger class:

* Do a minor bit of tweaking to the browsers in your test bed:

	- You must enable pop-ups in the browser, and/or for the domain on which you are developing.  **Safari** does not prompt you if you want to allow pop-ups, it just blocks them and the Logger fails silently.
	- Yes **it does work with IE 6**.  The snippet of Javascript in the sample page that posts the form content to the Logger instance doesn't work in IE6.  Comment it out and you'll see.


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

* Finish the jquery-less implementation to prepend the log messages to the DOM in the logger window.
 
* Decouple the output of the log messages so that I can write to either a browsers, file, web service, or socket.


## Known Issues

* Chrome will not write to the same pop-up window between different parent browser windows, or tabs.  Each tab, or window will write to it's own pop-up.


License
-------

This software is released under the Revised BSD License.

Copyright (c) 2013, Ryan Chapin, http:www.ryanchapin.com	      
All rights reserved.					      
                                                                    
Redistribution  and  use  in  source  and binary forms, with or without modification, are permitted provided that the following  
conditions are met:					      
                                                                    
* Redistributions  of source code must retain the above copyright notice, this list of conditions and the following disclaimer.    

* Redistributions   in  binary  form  must  reproduce  the  above copyright  notice,  this  list  of conditions and the following disclaimer in the documentation andor other materials provided with the distribution.					      
* Neither   the  name  of  Ryan  Chapin  nor  the  names  of  its contributors may be used to endorse or promote products derived from this software without specific prior written permission.    
                                                                    
THIS   SOFTWARE  IS  PROVIDED  BY  THE  COPYRIGHT  HOLDERS  AND  CONTRIBUTORS  "AS  IS"  AND  ANY EXPRESS OR IMPLIED WARRANTIES,  INCLUDING,  BUT  NOT  LIMITED  TO,  THE  IMPLIED  WARRANTIES OF MERCHANTABILITY  AND  FITNESS  FOR  A  PARTICULAR  PURPOSE  ARE  DISCLAIMED.   IN   NO  EVENT  SHALL  RYAN  CHAPIN,  ANY  HEIRS, SUCCESSORS,  EXECUTORS ANDOR ASSIGNS BE LIABLE FOR ANY DIRECT, INDIRECT,  INCIDENTAL,  SPECIAL,  EXEMPLARY,  OR  CONSEQUENTIAL DAMAGES   (INCLUDING,   BUT  NOT  LIMITED  TO,  PROCUREMENT  OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS  INTERRUPTION)  HOWEVER  CAUSED  AND  ON ANY THEORY OF LIABILITY,  WHETHER  IN  CONTRACT,  STRICT  LIABILITY,  OR TORT (INCLUDING  NEGLIGENCE  OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Questions or Comments
---------------------

If you have any questions or comments, please contact Ryan via http://www.ryanchapin.com/contact.html.
