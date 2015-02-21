/**********************************************************************/
/*   Copyright (c) 2013, Ryan Chapin, http://www.ryanchapin.com       */
/*   All rights reserved.                                             */
/*                                                                    */
/*   Redistribution  and  use  in  source  and binary forms, with or  */
/*   without modification, are permitted provided that the following  */
/*   conditions are met:                                              */
/*                                                                    */
/* - Redistributions  of source code must retain the above copyright  */
/*   notice, this list of conditions and the following disclaimer.    */
/* - Redistributions   in  binary  form  must  reproduce  the  above  */
/*   copyright  notice,  this  list  of conditions and the following  */
/*   disclaimer in the documentation and/or other materials provided  */
/*   with the distribution.                                           */
/* - Neither   the  name  of  Ryan  Chapin  nor  the  names  of  its  */
/*   contributors may be used to endorse or promote products derived  */
/*   from this software without specific prior written permission.    */
/*                                                                    */
/*   THIS   SOFTWARE  IS  PROVIDED  BY  THE  COPYRIGHT  HOLDERS  AND  */
/*   CONTRIBUTORS  "AS  IS"  AND  ANY EXPRESS OR IMPLIED WARRANTIES,  */
/*   INCLUDING,  BUT  NOT  LIMITED  TO,  THE  IMPLIED  WARRANTIES OF  */
/*   MERCHANTABILITY  AND  FITNESS  FOR  A  PARTICULAR  PURPOSE  ARE  */
/*   DISCLAIMED.   IN   NO  EVENT  SHALL  RYAN  CHAPIN,  ANY  HEIRS,  */
/*   SUCCESSORS,  EXECUTORS AND/OR ASSIGNS BE LIABLE FOR ANY DIRECT,  */
/*   INDIRECT,  INCIDENTAL,  SPECIAL,  EXEMPLARY,  OR  CONSEQUENTIAL  */
/*   DAMAGES   (INCLUDING,   BUT  NOT  LIMITED  TO,  PROCUREMENT  OF  */
/*   SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR  */
/*   BUSINESS  INTERRUPTION)  HOWEVER  CAUSED  AND  ON ANY THEORY OF  */
/*   LIABILITY,  WHETHER  IN  CONTRACT,  STRICT  LIABILITY,  OR TORT  */
/*   (INCLUDING  NEGLIGENCE  OR OTHERWISE) ARISING IN ANY WAY OUT OF  */
/*   THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF  */
/*   SUCH DAMAGE.                                                     */
/*                                                                    */
/**********************************************************************/
/*   version: 1.1                                                     */
/**********************************************************************/

/**
 * Constructor
 *
 * @param   string, name to be output in the log window for each Logger instance.
 */ 
com.ryanchapin.logger.Logger = function (instanceName) {

   this.instanceName = instanceName;

   //
   // Set the logLevel to a default value
   //
   this.setLogLevel('DEBUG');

};


// ----------------------------------------------------------------------------
// Properties:
//

/**
 * String identifier to be displayed with the log messages.  It could be the
 * class name or an instance name in which the Logger instance is composed.
 */
com.ryanchapin.logger.Logger.prototype.instanceName = null;


/**
 * Reference to the Logger output window
 */
com.ryanchapin.logger.Logger.prototype.logOutputWindowReference = null;


/**
 * Log output window configs
 */
com.ryanchapin.logger.Logger.prototype.logWindowConfig = new Object();

com.ryanchapin.logger.Logger.prototype.logWindowConfig.width = 800;

com.ryanchapin.logger.Logger.prototype.logWindowConfig.height = 400;

com.ryanchapin.logger.Logger.prototype.logWindowConfig.logOutputDiv = 'logOutput';

com.ryanchapin.logger.Logger.prototype.logWindowConfig.css =
   '<style>' +
   'body { font-family: Verdana, Arial, "sans-serif"; }' +
   'h1 {font-size: 1.25em;}' +
   'p { margin: 0; padding: 0; }' +
   'p.TRACE { color:#757575; }' +
   'p.DEBUG{ }' +
   'p.INFO{ font-style:italic; }' +
   'p.WARN{ font-weight:bold; }' +
   'p.ERROR{ color:#c20000; }' +
   'p.FATAL{ color:#c20000; font-style:italic; font-weight:bold; }' +
   '</style>';

com.ryanchapin.logger.Logger.prototype.logWindowConfig.js =
   '<' + 'script type="text/javascript"' + '>' +
   'function clearLogOutput() {' +
   'document.getElementById(\'' +
   com.ryanchapin.logger.Logger.prototype.logWindowConfig.logOutputDiv +
   '\').innerHTML=\'\';' +
   '}' +
   '</' + 'script' + '>';

com.ryanchapin.logger.Logger.prototype.logWindowConfig.html = 
   '<!DOCTYPE html>' +
   '<head>' +
   com.ryanchapin.logger.Logger.prototype.logWindowConfig.js +
   com.ryanchapin.logger.Logger.prototype.logWindowConfig.css +
   '<title>Logger.js Output</title>' +
   '</head>' +
   '<body>' +
   '<h1>Logger.js Output</h1>' +
   '<p><a href="" onclick="clearLogOutput(); return false;">Clear Log Output</a></p>' +
   '<div id="' + com.ryanchapin.logger.Logger.prototype.logWindowConfig.logOutputDiv + '"></div>' +
   '</body>' +
   '</html>';

com.ryanchapin.logger.Logger.prototype.logWindowConfig.logWindowName = 'output';


/**
 * The log level set for this instance; one of the logLevels enum values.
 */
com.ryanchapin.logger.Logger.prototype.logLevel = null;


/**
 * Logging levels
 */
com.ryanchapin.logger.Logger.prototype.logLevels = {
   'UNKNOWN': -1,
   'OFF'    : 0,
   'ALL'    : 1,
   'TRACE'  : 2,
   'DEBUG'  : 3,
   'INFO'   : 4,
   'WARN'   : 5,
   'ERROR'  : 6,
   'FATAL'  : 7
};


/**
 * Version of IE (if the current useragent is an IE variant we care about
 */
com.ryanchapin.logger.Logger.prototype.ieVersion = null;


// ----------------------------------------------------------------------------
// Accessor/Mutators:
//

com.ryanchapin.logger.Logger.prototype.getInstanceName = function() {
   return this.instanceName;
};


com.ryanchapin.logger.Logger.prototype.getLogLevel = function () {
   return this.logLevel;
};


/**
 * Returns the String value of the currently set logLevel.
 */
com.ryanchapin.logger.Logger.prototype.getLogLevelName = function (logLevel) {

   var $returnValue;

   //
   // Iterate through the logLevels enums and search for a matching key
   //
   for (var $key in this.logLevels) {
   
      if (this.logLevels[$key] == logLevel) {
         $returnValue = $key;
         break;
      } 
   }

   if ($returnValue === 'undefined' || $returnValue === null) {
      $returnValue = 'UNKNOWN';
   }

   return $returnValue;

};


/**
 * Sets the logLevel property to the int value of the logLevel enum
 */
com.ryanchapin.logger.Logger.prototype.setLogLevel = function (logLevel) {
   this.logLevel = this.logLevels[logLevel];
};


com.ryanchapin.logger.Logger.prototype.getLogOutputWindowReference = function () {
   return this.logOutputWindowReference;
};


com.ryanchapin.logger.Logger.prototype.setLogOutputWindowReference = function (logOutputWindowReference) {
   this.logOutputWindowReference = logOutputWindowReference;
};



com.ryanchapin.logger.Logger.prototype.getLogWindowConfig = function() {
   return this.logWindowConfig;
};


com.ryanchapin.logger.Logger.prototype.getLogWindowName = function () {
   return this.logWindowConfig.logWindowName;
};


com.ryanchapin.logger.Logger.prototype.isLogOutputWindowOpen = function () {
   if (typeof(this.logOutputWindowReference) === 'undefined' ||
       this.logOutputWindowReference === null) {
      return false;
   }
   return !this.logOutputWindowReference.closed;
};


// ----------------------------------------------------------------------------
// Utility Methods:
//

/**
 * FIXME:  This is currently broken and does not work properly
 *
 * Will return the current version of IE.
 *
 * This is based on a script seen on Stack Overflow regarding object detection
 * for Internet Explorer written by James Padolsy: http://james.padolsey.com/
 *
 * @return   int, indicating the version of IE being used.  If a non IE
 *           browser, returns 0.
 */
com.ryanchapin.logger.Logger.prototype.getIeVersion = function() {
   
   if (typeof(this.ieVersion) !== 'undefined' && this.ieVersion === 0) {
      return 0;
   }

   if (typeof(this.ieVersion) === 'undefined' || this.ieVersion === null) {
      var $version = 3;
      var $div = document.createElement('div');
      var $all = $div.getElementsByTagName('i');
      var $continue = true;

      while ($continue) {
         $version++;
         $div.innerHTML = '<!--[if gt IE ' + $version + ']><i></i><![endif]-->';
         $all[0];

         if ($div.innerHTML !== '' && $all[0] !== 'undefined') {
            $continue = false;
         }

      }
      this.ieVersion = ($version > 4) ? $version : 0;
   }
   return this.ieVersion;
};


com.ryanchapin.logger.Logger.prototype.getDate = function() {
   
   var $now = new Date();

   var $year  = $now.getFullYear();
   var $month = this.leftPad($now.getMonth(),2);
   var $day   = this.leftPad($now.getDay(),2);
   var $hour  = this.leftPad($now.getHours(),2);
   var $min   = this.leftPad($now.getMinutes(),2);
   var $sec   = this.leftPad($now.getSeconds(),2);
   var $milli = this.leftPad($now.getMilliseconds(),3);

   return $year + '-' + $month + '-' + $day + ' ' + $hour + ':' + $min + ':' + $sec + ':' + $milli;
};


com.ryanchapin.logger.Logger.prototype.leftPad = function(input, digits) {

   var $val;
   var $pad;

   switch (digits) {

   case 3:
      if (input < 10) {
         $val = 10;
         $pad = '00';
            break;
      }
      if (input < 100) {
         $val = 100;
         $pad = '0';
         break;
      }

   case 2: default:
      $val = 10;
      $pad = '0';
      break;
   }

    return input < $val ? $pad + input : input;
};

// ----------------------------------------------------------------------------
// Instance Methods:
//

/**
 * Determines if a log message of a given logLevel setting is appropriate given
 * the existing this.logLevel setting.
 *
 * @param   int, 
 * @return  boolean, whether we should output the log message
 */
com.ryanchapin.logger.Logger.prototype.shouldOutputLogMessage= function (logLevel) {
   if (this.getLogLevel() == this.logLevel['OFF']) {
      return false;
   }

   if (this.getLogLevel() == this.logLevel['ALL'] || this.getLogLevel() <= logLevel) {
      return true;
   } else {
      return false;
   }
};


/**
 * Determines whether or not the logLevel is set at a level between ALL and DEBUG
 *
 * @return   boolean, indicating whether the log level is set between ALL and DEBUG
 */
com.ryanchapin.logger.Logger.prototype.isDebugEnabled = function () {

   var $returnValue = false;

   if (this.getLogLevel() >= this.logLevels['ALL'] && this.getLogLevel() <= this.logLevels['DEBUG']) {
      $returnValue = true;
   }
   return $returnValue;
};


com.ryanchapin.logger.Logger.prototype.openLogOutputWindow = function () {

   this.getIeVersion();

   //
   // Make sure that we have not already opened a log output window
   //
   if (!this.isLogOutputWindowOpen()) {

      //
      // Determine if we can name the window based on the version
      // of IE that we might be using.
      //
      var $ieVersion = this.getIeVersion();
      var $windowName = $ieVersion > 0 ? '_blank' : this.getLogWindowName();

      //
      // Open a new window if there is not already one with the
      // same window name
      //
      var $logOutputWindow = window.open(
         '',
         $windowName,
         'width='        + this.logWindowConfig.width  +
         ',height='      + this.logWindowConfig.height +
         ',menubar=0'    +
         ',toolbar=1'    +
         ',status=0'     +
         ',scrollbars=1' +
         ',resizable=1');

      //
      // Check to see if we were able to open a window
      //
      if ($logOutputWindow === 'undefined' || $logOutputWindow === null) {
         return;
      }

      this.setLogOutputWindowReference($logOutputWindow);

      //
      // Insert the HTML markup, CSS, and JavaScript into the logOutputWindow
      // only if we have not yet already added the markup to window
      //
      var $logOutputDivId = $logOutputWindow.document.getElementById(this.logWindowConfig.logOutputDiv);

      if ($logOutputDivId === 'undefined' || $logOutputDivId === null) {
         //
         // Add the HTML markup skeleton to the logOutputWindow
         //
         $logOutputWindow.document.writeln(this.logWindowConfig.html);
      }
   }
};


/**
 *
 */
com.ryanchapin.logger.Logger.prototype.outputLogMessage = function(logMessage, logLevel) {

   this.openLogOutputWindow();

   //
   // Get a reference to the log output window
   //
   var $logOutputWindowRef = this.getLogOutputWindowReference();

   //
   // Get a reference to the div into which we will be entering content in
   // the log output window.
   //
   var $logOutputDivRef = $logOutputWindowRef.document.getElementById(this.logWindowConfig.logOutputDiv);

   //
   // The String representation of the logLevel argument
   //
   var $logLevelName = this.getLogLevelName(logLevel);

   //
   // Generate a Date String to output
   //
   var $now = new Date();

   //
   // Output the log message to the log window.
   // In this case, we will insert it at the top of the list
   // of existing elements in our DOM container.

/*
   var $contentToAppend = new Object('<p class="' + $logLevelName + '">' +
      'DATE: ' + this.getDate() + ' ' +
      '(' + this.getInstanceName() + ') ' +
      '[' + $logLevelName + '] - ' +
      logMessage +
      '</p>');
   var $elements = $logOutputDivRef.getElementsByTagName('p');
   var $firstElement = $elements[0];
   //$logOutputDivRef.insertBefore($contentToAppend, $firstElement);
*/

   // Create the <p> tag we will add to the output window
   var $contentToAppend = $logOutputWindowRef.document.createElement('p');
   $contentToAppend.setAttribute('class', $logLevelName);
   $contentToAppend.innerHTML = '(' + this.getInstanceName() + ') ' +
      '[' + $logLevelName + '] - ' +
      logMessage; 


   // Just appends at the end
   // $logOutputDivRef.appendChild($contentToAppend);

   //
   // Get a list of all of the elements in the div
   //
   var $elements = $logOutputDivRef.getElementsByTagName('p');
   var $firstElement = ($logOutputDivRef.hasChildNodes()) ? $elements[0] : null;
   $logOutputDivRef.insertBefore($contentToAppend, $firstElement);

   /*
   var $newElem = document.createElement('p');
   $newElem.className = $logLevelName;
   $newElem.innerHTML = 'DATE: ' + this.getDate() + ' ' +
      '(' + this.getInstanceName() + ') ' +
      '[' + $logLevelName + '] - ' +
      logMessage;
   // $logOutputDivRef.insertBefore($newElem, $logOutputDivRef.firstChild);
   $logOutputDivRef.insertBefore($newElem, ($logOutputDivRef.hasChildNodes()) ? $logOutputDivRef.childNodes[0]:'undefined');

// LEFT OFF, still messed up in IE.

/*
   $(eval($logOutputDivRef)).prepend(
      '<p class="' + $logLevelName + '">' +
      'DATE: ' + this.getDate() + ' ' +
      '(' + this.getInstanceName() + ') ' +
      '[' + $logLevelName + '] - ' +
      logMessage +
      '</p>');
*/

};


/**
 * Determines whether or not a given log output request should have it's message output
 *
 * @param   logMessage, String,
 * @param   logLevel, int,
 */
com.ryanchapin.logger.Logger.prototype.logOutputRequest = function(logMessage, logLevel) {
   if (this.shouldOutputLogMessage(logLevel)) {
      this.outputLogMessage(logMessage, logLevel);
   } 
};


com.ryanchapin.logger.Logger.prototype.trace = function(logMessage) {
   this.logOutputRequest(logMessage, this.logLevels.TRACE);
};

com.ryanchapin.logger.Logger.prototype.debug = function(logMessage) {
   this.logOutputRequest(logMessage, this.logLevels.DEBUG);
};

com.ryanchapin.logger.Logger.prototype.info= function(logMessage) {
   this.logOutputRequest(logMessage, this.logLevels.INFO);
};

com.ryanchapin.logger.Logger.prototype.warn = function(logMessage) {
   this.logOutputRequest(logMessage, this.logLevels.WARN);
};

com.ryanchapin.logger.Logger.prototype.error = function(logMessage) {
   this.logOutputRequest(logMessage, this.logLevels.ERROR);
};

com.ryanchapin.logger.Logger.prototype.fatal = function(logMessage) {
   this.logOutputRequest(logMessage, this.logLevels.FATAL);
};

