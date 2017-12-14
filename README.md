# grunt-aliensvision_pi1

> AlienSVision Project Instructions (level-1).

```js
Developed by: Surjeet Singh
Email: surjitsippy@gmail.com
```

## Getting Started
This plugin requires Grunt `~0.4.5`
```js
Plugin: Grunt [NPMJS]
Codename: grunt-aliensvision_pi1 
CopyLeft [ASV] - AlienSVision (http://aliensvision.com)
Description: AlienSVision Project Instructions (level-1)
http://aliensvision.com/grunt_plugins.php
Developed by 'Surjeet Singh'
Copyright (c) 2013 to 2017 AlienSVision
Licensed under the Free license.
```
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-aliensvision_pi1 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-aliensvision_pi1');
```

## The "aliensvision_pi1" task

### Overview
In your project's Gruntfile, add a section named `aliensvision_pi1` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  aliensvision_pi1: {
    options: {
      //  default options settings.
      //  you  can change these as required.
      //  possible values are given along with options.

      //  Last character after processing
      punctuation: '.',         

      //  file content separator, any valid string/char
      separator: '\n',                  

      //  default: 'no', if 'yes' then makes content lower case
      reverseUCase: 'no',   

      //  if 'yes', trims leading spaces of every file contents
      trimLeft: 'no',

      //  if 'yes', trims trailing spaces of every file contents
      trimRight: 'no',

      //  if 'yes', trims leading and trailing spaces of every file contents
      trim: 'no',

      //  removes all spaces from all specified files' contents
      removeSpaces: 'no',

      //  if 'yes', removes all dots/periods (.) from the files' contents
      removePeriods: 'no',

      //  if 'yes', normalizes the string paths inside the files,
      //  converts double slashes (//) to single slash (/)
      //  don't use it if paths are like http://abc.com
      normalizePaths: "no",

      //  if 'yes', converts TAB to single space
      tabToSpace: "no",

      //  if 'yes', replaces multiple spaces to one space
      multipleSpacesToOneSpace: "no",
    },

    files: {
      // Target-specific file lists and/or options go here.
      //  'src' supports filenames/paths with wild cards also.
      src: ['file1.txt', '/folder1/file2.js', '../folder2/file3.txt'],
      dest: 'my_new_file.txt',
    },
  },
});
```

### Options

#### option values
Almost all options have `String` values, if some/few have different types those are mentioned along with the usage sample above.


### Usage Examples
#### Syntax:
`Option: 'default_value',                     //  'possible value(s)'`
#### options with default and possible values:
```js
punctuation: '.',                     //  ''
separator: '\n',                      //  '.' or any valid character
reverseUCase: 'no',                   //  'yes'
trimLeft: 'no',                       //  'yes'
trimRight: 'no',                      //  'yes'
trim: 'no',                           //  'yes'
removeSpaces: 'no',                   //  'yes'
removePeriods: 'no',                  //  'yes'
normalizePaths: "no",                 //  'yes'
tabToSpace: "no",                     //  'yes'
multipleSpacesToOneSpace: "no"        //  'yes'
```

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  aliensvision_pi1: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  aliensvision_pi1: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
#### Release 0.1.7        [4]
  - stability and performance improved

#### Release 0.1.2        [1]
  - trim options added

#### Release 0.1.1        [1]
  - simple trim option added

#### Release 0.1.0        [2]
  - path normalization
  - multiple files are allowed as 'src'