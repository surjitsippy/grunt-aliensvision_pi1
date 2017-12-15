/*
* Plugin: Grunt [NPMJS]
* Codename: grunt-aliensvision_pi1 
* CopyLeft [ASV] - AlienSVision (http://aliensvision.com)
* Description: AlienSVision Project Instructions (level-1)
* http://aliensvision.com/grunt_plugins.php
* Developed by 'Surjeet Singh'
* Copyright (c) 2013 to 2017 AlienSVision
* Licensed under the Free license.
*/
'use strict';
module.exports = function(grunt) {
  grunt.registerMultiTask('aliensvision_pi1', 'Converts file contents to upper case and then concats the resultant files outputs.', function() {
    var options = this.options({
        punctuation: '.',
        separator: '\n',
        reverseUCase: 'no',
        trimLeft: 'no',
        trimRight: 'no',
        trim: 'no',
        removeSpaces: 'no',
        removePeriods: 'no',
        normalizePaths: "no",
        tabToSpace: "no",
        multipleSpacesToOneSpace: "no"
    });
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;  
        }
      }).map(function(filepath) {
        var data = "";
        if(options.reverseUCase == "yes")
        {   data = grunt.file.read(filepath).toLowerCase();    }
        else
        {   data = grunt.file.read(filepath).toUpperCase();    }
        if(options.removeSpaces == "yes")  
        {   data = data.replace(/ /g, "");  }
        if(options.removePeriods == "yes")  
        {   data = data.replace(/\./g, "");  }  
        if(options.normalizePaths == "yes")  
        {   data = data.replace(/\/\//g, "/");  }
        if(options.tabToSpace == "yes")  
        {   data = data.replace(/\t/g, " ");  }
        if(options.trimLeft == "yes")  
        {   data = data.replace(/\s+/, "");  }
        if(options.trimRight == "yes")  
        {   data = data.replace(/\s+$/, "");  }
        if(options.trim == "yes")  
        {   
          data = data.replace(/\s+/, "");  
          data = data.replace(/\s+$/, "");
        }
        if(options.multipleSpacesToOneSpace == "yes")  
        {  
          var i = 0; 
          for(i=0; i<data.length; i++)
          {
            data = data.replace(/  /g, " ");  
          }
        }
        return data;
      }).join(grunt.util.normalizelf(options.separator));
      src += options.punctuation;
      grunt.file.write(f.dest, src);
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
