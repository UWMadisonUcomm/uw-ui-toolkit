---
layout: page
title: Getting Started
slug: getting-started
---

<p class="lead">
  The UW UI Toolkit can be easily added to your project. There are two different ways of doing this, depending on your skills:
</p>

##1. Download the .zip file with precompiled files (easy) ##

1. [Download](https://github.com/UWMadisonUcomm/uw-ui-toolkit/releases/download/v0.1.4/uw-ui-toolkit-0.1.4.zip) the compressed files and open them.
2. Link the CSS and JavaScript files in your HTML as follows (you can also use the [examples](/examples/) as a starting point for your project):


        <html>
          <head>
            <title>Your site title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <link href="/css/uw-ui-toolkit.css" rel="stylesheet" media="screen">
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
          </head>

          ...
          
          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
          </body>
        </html>


## 2. Download the source code (advanced) ##

### 1. Get the code using either of these methods:
  - Clone from GitHub:
  
      `$ git clone git@github.com:UWMadisonUcomm/uw-ui-toolkit.git`

  - Install via bower:
  
      `$ bower install uw-ui-toolkit`
 
  - Install via npm:
  
      `$ npm install uw-ui-tookit (<-- need to register)`

### 2. Set up your development environment:

After cloning/downloading the files, `cd` into your UW UI Toolkit's directory and:

1. Install Node modules ([Node.js](http://nodejs.org/) is needed for downloading the required dependencies to compile the UW UI Toolkit).

      ```bash
      $ npm install
      ```

2. Install Grunt command line tools ([Grunt](http://gruntjs.com/) is needed for building and compiling the UW UI Toolkit's source code).

      ```bash
      $ npm install -g grunt-cli
      ```

See the for more details on Grunt and installation of the the command line tools.

### 3. Install Jekyll ###

If you want to controbute to the project documentation, you'll need to install Jekyll, which is what this site's pages are built in. (You'll need to also have Ruby and the gem bundler installed on your machine.)

To install Jekyll, run:

```bash
$ bundle install
```

### 4. Start the local server ###

To start the local web server, run:

```bash
$ jekyll serve --watch
```

View the site at http://localhost:4000.

### 5. Compile the LESS ###

To compile the LESS files, run:

```bash
$ grunt watch
```

The *watch* task will dynamically recompile your CSS as you save changes to the LESS files.
