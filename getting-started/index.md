---
layout: page
title: Getting Started
slug: getting-started
---

## Download the precompiled files ##

<p>
  <a href="/downloads/" class="btn btn-info">Download the compiled files <span class="glyphicon glyphicon-arrow-down"></span></a>
</p>

We will provide a download link here soon for downloading the precompiled and minified CSS and Javascript files for use in your website.

## Developing with the Toolkit ##

### Get the code ###

<p>
  <a href="/downloads/" class="btn btn-info">Download the source code <span class="glyphicon glyphicon-arrow-down"></span></a>
</p>

or

<p>
  <a href="https://github.com/UWMadisonUcomm/uw-ui-toolkit" class="btn btn-info"><span class="fa fa-github"></span> Fork on Github</a>
</p>

### 1. Install Node modules ###

After cloning repository or downloading the source code, run:

```bash
$ npm install
```

The project requires Node.js. [Visit the Node.js website](http://nodejs.org/) for installation instructions.

### 2. Install Grunt command line tools ###

This project uses [Grunt](http://gruntjs.com/) for building and compiling the source code. If needed, install the Grunt command line tools:

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
