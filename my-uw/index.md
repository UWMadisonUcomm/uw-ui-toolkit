---
layout: my-uw-template
title: MyUW App Style Guide
slug: my-uw
---
<p class="lead">Your content in MyUW Beta is called an app. The following are the styles for apps. This page is a work in progress. These styles are all namespaced under the class 'my-uw', which affects the content of MyUW. It does not affect the sidebar, top header, or footer of MyUW.</p>
<p class="lead">You can view current apps in MyUW Beta by logging in with your NetID <a href="https://my.wisc.edu/portal/Login?profile=bucky" target="blank">here</a>.</p>
<div>

<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="quickaccess" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Quick Access
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="quickaccess">
    <li class='dropdown-header'>Application Configuration</li>
    <li><a href="#app-structure">App Structure</a></li>
    <li><a href="#text-guidelines">Text Guidelines</a></li>
    <li><a href="#coarse-grain-access">Coarse Grain Access</a></li>
    <li><a href="#app-examples">App Examples</a></li>
    <li class="dropdown-header">Components</li>
    <li><a href="#typography">Typography</a></li>
    <li><a href="#widgets">Widgets</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#buttons">Buttons</a></li>
    <li><a href="#tables">Tables</a></li>
  </ul>
</div>

  <div class="page-header">
    <h2 id='app-structure'>App Structure</h2>
  </div>
  <p>Apps should be structured the same way for consistency and improved usability. Below is the basic app framework that all apps should use. Each app should have an app header which contains the title and optionally a cover image and description, and an app body, which contains the main content and an optional navigation if necessary.</p>
  {% highlight html %}
  <div class="portlet-frame">
    <div class="portlet-header">
      <!-- Optional Cover Image -->
      <img src="somewhere" alt="portlet cover image">
      <h1>App Title</h1>
      <p>Optional App Description.</p>
    </div>
    <div class="portlet-body">
    <!-- App Navigation if Needed -->
      <div class="inner-nav-container">
        <ul class="inner-nav">
          <li class="active"><a>Nav Item 1</a></li>
          <li><a>Nav Item 2</a></li>
          <li><a>Nav Item 3</a></li>
        </ul>
      </div>
      <div class="page-content">
        <!-- Your App Content Here -->
      </div>
      <div class="portlet-footer">
        <ul>
          <!-- Footer Links --> 
        </ul>
      </div>
    </div>
  </div>
  {% endhighlight %}
  <div class="portlet-frame">
    <div class="portlet-header">
      <img src="http://www.rockymtnrefl.com/BalancedRockPanocd2283287.jpg" alt="portlet cover image">
      <h1>App Title</h1>
      <p>Optional App Description.</p>
    </div>
    <div class="portlet-body">
      <!-- App Navigation if Needed -->
      <div class="inner-nav-container">
        <ul class="inner-nav">
          <li class="active"><a>Nav Item 1</a></li>
          <li><a>Nav Item 2</a></li>
          <li><a>Nav Item 3</a></li>
        </ul>
      </div>
      <div class="page-content" style="height:400px;">
        <h3 class="center" style="margin-top:180px;">App Content</h3>
      </div>
    </div>
    <div class="portlet-footer">
      <ul>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Link 1</a></li>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Link 2</a></li>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Link 3</a></li>
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Link 4</a></li>  
      </ul>
    </div>
  </div>
  
  
  <div class="page-header">
    <h2 id='text-guidelines'>Text Guidelines</h2>
  </div>
  <p>'MyUW' never has a space between the letters.</p>
  <h4>App Title</h4>
  <p>30 characters maximum. Avoid the word “your.” When possible, avoid the word “my” unless it’s necessary to differentiate it from another app. (For example, an app with a list of a student’s courses would be titled “My Courses” because a “Courses” app would be a list of all courses at the university.)</p>
  <h4>App Description</h4>
  <p>80 characters maximum. Avoid the word “your.” (For example, instead of “view your earnings and tax statements,” use “view earnings and tax statements.”)</p>
  

  <div class="page-header">
    <h2 id='widgets'>Widgets</h2>
  </div>
  <p>MyUW displays a grid of smart widgets on the home page in smart widget mode. You can easily create widgets using the <a href="https://github.com/UW-Madison-DoIT/myuw-smart-widget-creator">Widget Creator</a>. Each widget follows approximately this structure, but <i>widget developers only need to worry about the code inside the widget-body div.</i></p>
  {% highlight html %}
  <div class="widget-frame">
    <div class="widget-header">
      <div class='widget-info'>
        <i class="fa fa-info-circle" ... ></i>
      </div>
      <div class='widget-remove'>
        <i class="fa fa-times" ... ></i>
      </div>
      <div class="widget-title">
        <h4>My Course Services</h4>
      </div>
    </div>
    <div class="widget-body">
      <!-- Your widget content here -->
      <a class="btn btn-default launch-app-button">See all</a>
    </div>
  </div>
  {% endhighlight %}
  <h4>When to use</h4>
  <p>Widget template content is a great way to get some content right on the homepage.  You can show static content that is the same for all users or show data that is supplied via a json feed from the portal. It is not useful to use widget content to only show a link that directly links to the app.  Reserve the widget template for richer displays of content.  Also most web proxy portlets are not a good candidate for widget templating.  Constructing specific urls for specific users without a json feed is not what the template can do.</p>
  <div class="row">
    <div class="col-xs-4">
      <div class="widget-frame" id="portlet-id-{{::portlet.nodeId}}">
        <div class="widget-header">
          <div class='widget-info'>
            <i title="Info" class="fa fa-info-circle"
            tooltip="{{::portlet.description}}"
            tooltip-trigger="mouseenter"
            tooltip-placement="top"
            tooltip-popup-delay="200"></i>
          </div>
          <div class='widget-remove'>
            <i title="Remove" class="fa fa-times portlet-options" ng-click="widgetCtrl.removePortlet(portlet.nodeId, portlet.title)"></i>
          </div>
          <div class="widget-title">
            <h4>My Courses (6)</h4>
          </div>
          <ul class="widget-list">
            <li>
              <p class="bold">General Physics</p>
              <p>M 10:30 ECCR 1203</p>
            </li>
            <li>
              <p class="bold">Introduction to Pottery</p>
              <p>TR 2:30 CS 3223</p>
            </li>
            <li>
              <p class="bold">European Intellectual History</p>
              <p>TR 12:10 BIO 143</p>
            </li>
            <li>
              <p class="bold">Molecular Mechanics</p>
              <p>MWF 8:30 ECCR 1302</p>
            </li>
            <li>
              <p class="bold">Biochemistry</p>
              <p>F 10:15 CHEM 405</p>
            </li>
          </ul>
          <a class="btn btn-default launch-app-button" href="{{::portlet.url}}" target="{{::portlet.target}}">See all</a>
        </div>
      </div>
      <p>List Template example</p>
    </div>
    <div class="col-xs-4">
      <div class="widget-frame" id="portlet-id-{{::portlet.nodeId}}">
        <div class="widget-header">
          <div class='widget-info'>
            <i title="Info" class="fa fa-info-circle"
            tooltip="{{::portlet.description}}"
            tooltip-trigger="mouseenter"
            tooltip-placement="top"
            tooltip-popup-delay="200"></i>
          </div>
          <div class='widget-remove'>
            <i title="Remove" class="fa fa-times portlet-options" ng-click="widgetCtrl.removePortlet(portlet.nodeId, portlet.title)"></i>
          </div>
          <div class="widget-title">
            <h4>My Courses (6)</h4>
          </div>    
        </div>
        <div class='widget-body widget-grid'>
          <div class='row'>
            <div class='col-xs-6 center icon-button-div'>
               <div class='btn btn-primary rounded icon-button'>
                  <a href='{{item.link}}'><i class='fa fa-calendar'></i></a> 
               </div>
               <p>Link 1</p>
            </div>
            <div class='col-xs-6 center icon-button-div'>
               <div class='btn btn-primary rounded icon-button'>
                  <a href='{{item.link}}'><i class='fa fa-book'></i></a> 
               </div>
               <p>Link 2</p>
            </div>
            <div class='col-xs-6 center icon-button-div'>
               <div class='btn btn-primary rounded icon-button'>
                  <a href='{{item.link}}'><i class='fa fa-filter'></i></a> 
               </div>
               <p>Link 3</p>
            </div>
            <div class='col-xs-6 center icon-button-div'>
               <div class='btn btn-primary rounded icon-button'>
                  <a href='{{item.link}}'><i class='fa fa-list'></i></a> 
               </div>
               <p>Link 4</p>
            </div>
          </div>
        </div>
        <a class='btn btn-default launch-app-button ng-scope' href='/portal/p/course-services'>Launch full app</a>
      </div>
      <p>Grid Template example - links</p>
    </div>
    <div class="col-xs-4">
      <div class="widget-frame" id="portlet-id-u29l1n11">
        <div class="widget-header">
          <!-- Widget Chrome -->
          <div class="widget-info">
            <i title="Info" class="fa fa-info-circle" tooltip="View professional development opportunities for faculty and staff on the UW-Madison campus." tooltip-trigger="mouseenter" tooltip-placement="top" tooltip-popup-delay="200"></i>
          </div>
          <div class="widget-remove">
            <i title="Remove" class="fa fa-times portlet-options" ng-click="widgetCtrl.removePortlet(portlet.nodeId, portlet.title)"></i>
          </div>
          <div class="widget-title">
            <h4 class="ng-binding">My Professional Development</h4>
          </div>
        </div>
        <div ng-if="'GENERIC' === widgetCtrl.portletType(portlet)" class="ng-scope">
          <div ng-controller="GenericWidgetController as genericWidgetCtrl" class="ng-scope">
              <content-item><div id="portlet-id-u29l1n11" class="ng-scope"><div><div class="widget-body widget-grid"><form action="http://www.myprofdev.wisc.edu/portal/portal_login.asp" target="_blank" class="ng-pristine ng-valid"><div class="input-group"><input type="text" name="searchtext" class="form-control" placeholder="Search courses and events"><span class="input-group-btn"><button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button></span></div></form><div class="row"><div class="col-xs-6 icon-button-div"><div class="btn btn-primary rounded icon-button"><a href="http://www.myprofdev.wisc.edu/default.asp" target="_blank"><i class="fa fa-book"></i></a></div><p>All courses and events</p></div><div class="col-xs-6 icon-button-div"><div class="btn btn-primary rounded icon-button"><a href="http://www.ohrd.wisc.edu/ohrdcatalogportal/LearningTranscript/tabid/57/Default.aspx?ctl=login" target="_blank"><i class="fa fa-envelope-o"></i></a></div><p>My transcript</p></div></div></div><a class="btn btn-default launch-app-button" href="/portal/f/u29l1s4/p/my-professional-development.u29l1n11/max/render.uP" target="">Launch full app</a></div></div></content-item>
          </div>
        </div> 
      </div>
      <p>Grid Template example - form and links</p> 
    </div>
     
  </div>

  <h3>Widget Templates</h3>
  <p>Generally, widgets should follow one of the following template structures for consistency and maintainability.</p>

  <h4>List Template</h4>
  <p>Display a list of up to 5 items. Each list item can have primary text, secondary text, and optional text on the right side. For this template, in the widget creator, choose 'list-of-content'. Here is the sample code:</p>
  {% highlight html %}
  <div class="widget-body">
    <ul class="widget-list">
      <li>
        <p class="bold">List item 1<span class="right">More text</span></p>
        <p>Secondary Text</p>
      </li>
      <li>
        <p class="bold">List item 2<span class="right">...</span></p>
        <p>Good for a description of the item</p>
      </li>
      <li>
        <p class="bold">List item 3<span class="right">...</span></p>
        <p>Or for extra information</p>
      </li>
      <li>
        <p class="bold">List item 4<span class="right">...</span></p>
        <p>...</p>
      </li>
      <li>
        <p class="bold">List item 5<span class="right">...</span></p>
        <p>...</p>
      </li>
    </ul>
    <a class="btn btn-default launch-app-button">See all</a>
  </div>
  {% endhighlight %}
  <h4>Grid Template</h4>
  <p>Display a 2x2 grid, which can show links (as circular buttons), inline search forms, help text, etc. The My Course Services and My Professional Development portlets shown above are examples of grid widgets. For this template, in the Widget Creator, select either 'list-of-links' or 'search-plus-links'. Here is the sample code:</p>
  {% highlight html %}
    <div class='widget-body widget-grid'>
        <div class='row'>
          <div class='col-xs-6 center icon-button-div'>
             <div class='btn btn-primary rounded icon-button'>
                <a href='...'><i class='fa fa-calendar'></i></a> 
             </div>
             <p>Link 1</p>
          </div>
          <div class='col-xs-6 center icon-button-div'>
             <div class='btn btn-primary rounded icon-button'>
                <a href='...'><i class='fa fa-book'></i></a> 
             </div>
             <p>Link 2</p>
          </div>
          <div class='col-xs-6 center icon-button-div'>
             <div class='btn btn-primary rounded icon-button'>
                <a href='...'><i class='fa fa-filter'></i></a> 
             </div>
             <p>Link 3</p>
          </div>
          <div class='col-xs-6 center icon-button-div'>
             <div class='btn btn-primary rounded icon-button'>
                <a href='...'><i class='fa fa-list'></i></a> 
             </div>
             <p>Link 4</p>
          </div>
        </div>
      </div>
      <a class='btn btn-default launch-app-button' href='...'>Launch full app</a>
    </div>
  {% endhighlight %}

  <h3>Text Guidelines</h3>
  <p>Text inside widgets, including the action button at the bottom, should always be in sentence case, i.e. "See all course services" rather than "See all Course Services". Widget titles should be in title case, i.e. "Course Services".</p>



  <div class="page-header">
    <h2 id='typography'>Typography</h2>
  </div>
  <p class="lead">MyUW uses a default font-weight of 200.</p>
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  
  <div class="page-header">
    <h2 id='links'>Links</h2>
  </div>
  <p><a href="">Linky link</a></p>
  <p><a href="">Student center</a></p>
  
  <div class="page-header">
    <h2 id='buttons'>Buttons</h2>
  </div>
  <p class="lead">UW buttons build off the Bootstrap button styles. Buttons can be either <code>button</code> or <code>a</code> elements. Give every button a class of <code>.btn</code>, then add classes below to suit your needs.</p>
  <div class="row">
    <div class="col-sm-3">
      <h3>Default buttons</h3>
      <p>Add <code>.btn-default</code> for the default button. Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> to change the size of your button.</p>
      <a href="" class="btn btn-default btn-lg">Large button</a><br>
      <a href="" class="btn btn-default">Normal button</a><br>
      <button href="" class="btn btn-default btn-sm">Small button</button><br>
      <a href="" class="btn btn-default btn-xs">Extra Small button</a><br>
    </div>
    <div class="col-sm-3">
      <h3>Primary buttons</h3>
      <p>Add <code>.btn-primary</code> for a primary button, which adds extra visual weight.</p>
      <button href="" class="btn btn-lg btn-primary">Large button</button><br>
      <a href="" class="btn btn-primary">Normal button</a><br>
      <a href="" class="btn btn-sm btn-primary">Small button</a><br>
      <a href="" class="btn btn-xs btn-primary">Extra Small button</a><br>
    </div>
    <div class="col-sm-3">
      <h3>Flat & Outline buttons</h3>
      <p>Add <code>.btn-outline</code> for an outline button. Add <code>.btn-flat</code> for a flat style. Note that the flat and outline styles cannot be combined with an action button class without manually adding another class.</p>
      <a href="" class="btn btn-outline">Outline button</a><br>
      <a href="" class="btn btn-outline btn-sm">Small outline button</a><br>
      <a href="" class="btn btn-flat">Flat button</a><br>
      <a href="" class="btn btn-flat btn-sm">Small flat button</a><br>
    </div>
    <div class="col-sm-3">
      <h3>Action buttons</h3>
      <p>Add <code>.btn-dark</code>, <code>.btn-success</code> for form submission or success actions, <code>.btn-neutral</code> for a neutral blue color, or <code>.btn-disabled</code> for a button that should be disabled.</p>
      <a href="" class="btn btn-dark">Dark Red button</a><br>
      <a href="" class="btn btn-success">Green Success button</a><br>
      <a href="" class="btn btn-neutral">Blue Neutral button</a><br>
      <a class="btn btn-disabled">Gray Disabled button</a><br>
    </div>
  </div>
  
  <div class="page-header">
    <h2 id='tables'>Tables</h2>
  </div>
  <p>MyUW tables add little to the tables provided by Bootstrap. All tables should be given a class of <code>.table</code>. It is recommended to use responsive tables by surrounding your &lttable&gt element with a div with a class of <code>.table-responsive</code>.</p>
  <h4 class="center">UW 2014 Football Roster</h4><br>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead><tr><th>#</th><th>Name</th><th>Position</th><th>Height</th><th>Weight</th><th>Class</th><th>Hometown</th><tr></thead>
      <tr><td>1</td><td>A.J. Jordan</td><td>CB</td><td>6-0</td><td>178</td><td>JR</td><td>Dayton, OH</td></tr>
      <tr><td>2</td><td>Joel Stave</td><td>QB</td><td>6-5</td><td>225</td><td>JR</td><td>Greenfield, WI</td></tr>
      <tr><td>3</td><td>Kenzel Doe</td><td>WR</td><td>5-8</td><td>170</td><td>SR</td><td>Reidsville, NC</td></tr>
      <tr><td>4</td><td>Devin Gaulden</td><td>CB</td><td>5-10</td><td>180</td><td>JR</td><td>Miramar, FL</td></tr>
      <tr><td>5</td><td>Darius Hillary</td><td>CB</td><td>5-11</td><td>187</td><td>JR</td><td>Cincinnati, OH</td></tr>
      <tr><td>5</td><td>Tanner McEvoy</td><td>QB</td><td>6-6</td><td>223</td><td>JR</td><td>Hillsdale, NJ</td></tr>
      <tr><td>6</td><td>Corey Clement</td><td>RB</td><td>5-11</td><td>210</td><td>SO</td><td>Glassboro, NJ</td></tr>
      <tr><td>6</td><td>Alec James</td><td>DE</td><td>6-4</td><td>239</td><td>FR</td><td>Brookfield, WI</td></tr>
      <tr><td>7</td><td>Michael Caputo</td><td>S</td><td>6-1</td><td>206</td><td>JR</td><td>Imperial, PA</td></tr>
      <tr><td>7</td><td>D.J. Gillins</td><td>QB</td><td>6-3</td><td>185</td><td>FR</td><td>Jacksonville, FL</td></tr>
    </table>
  </div>
  
  <!-- <div class="page-header">
    <h2 id='search'>Search</h2>
  </div>
  <p class="lead"></p>
  <h3>Simple searchbar</h3>
  <form>
    <div class="uw-search-group">
      <input type="search" class="uw-search" placeholder="Search MyUW" name="initialFilter">
      <button class="btn-uw-search" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </form> -->
  
</div>

<div class="page-header">
  <h1 id='app-examples'>App Examples</h1>
</div>

<!-- List of Links -->
<div class="portlet-frame">
  <div class="portlet-header">
    <img class="header-image" src="/dist/img/bascom-spring.jpg" alt="UW Campus cover image">
    <h1>List of Links</h1>
    <p>A whole bunch of links, all in one place.</p>
  </div>
  <div class="porlet-body">
    <div class="page-content">
      <ul class="list-of-links">
        <li>
          <a href='https://admin.lists.wisc.edu/classlists' target='blank'>Manage EMAIL CLASS LISTS (Classlist Module)</a>
          <p>Optional text to describe the link. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet egestas enim, id volutpat massa. Quisque laoreet urna eu turpis tempor aliquam in sed velit.</p>
        </li>
        <li><a href='http://www.registrar.wisc.edu/classroom_scheduling.htm' target='blank'>Classroom scheduling</a>
          <p>Nullam sit amet egestas enim, id volutpat massa. Quisque laoreet urna eu turpis tempor aliquam in sed velit.</p>
        </li>
        <li><a href='http://registrar.wisc.edu/grades_and_grading_policy.htm' target='blank'>Grades and grading policy</a></li>
        <li><a href='http://www.doit.wisc.edu/learnatuw/' target='blank'>Learn about Learn@UW</a>
        <li><a href='http://www.library.wisc.edu/inst-services' target='blank'>Library Instructional Services for Faculty</a></li>
        <li><a href='http://registrar.wisc.edu/faculty_staff_forms.htm' target='blank'>Registrar's Office Faculty/Staff Forms</a></li>
        <li><a href='http://registrar.wisc.edu/documents/Official_Programs_of_Study.pdf' target='blank'>Academic programs listing</a></li>
        <li><a href='https://tle.wisc.edu/' target='blank'>Teaching and Learning Excellence@UW-Madison</a></li>
        <li><a href='http://registrar.wisc.edu/curricular_toolkit.htm' target='blank'>Curricular Toolkit</a></li>
        <li><a href='http://learnuw.wisc.edu/' target='blank'>LEARN@UW COURSES</a></li>
      </ul>
    </div>
  </div>
</div>
    
<!-- PAYROLL INFORMATION -->
<div class="portlet-frame">
  <div class="portlet-header">
    <img src="http://www.arb.ca.gov/msprog/moyer/yosemite_pan.jpg" alt="UW Campus cover image">
    <h1>Benefit Information</h1>
    <p>This is the app where you can check your benefit information.</p>
  </div>
  <div class="portlet-body">
    <script>
      $(document).ready(function() {
        $('.inner-nav li').on('click', function() {
          $('.inner-nav li').not(this).removeClass('active');
          $(this).addClass('active');
        });
      });
    </script>
    <div class="inner-nav-container">
      <ul class="inner-nav">
        <li class='active'><a>Summary</a></li>
        <li><a>Statements</a></li>
        <li><a>Dependents</a></li>
      </ul>
    </div>
    <div class="page-content">
      <div>
        <div>
          <span>Coverage as of the last pay period</span>
        </div>
        <div>
          <div class="flc-pager-top dl-pager-navbar center" style="display: block;" id="fluid-id-4">
            <ul class="dl-pager-bar fl-pager-ui uw-pager-bar">
              <li class="flc-pager-previous dl-pager-previous fl-pager-disabled">
                <a href="javascript:;" title="Previous Page" class="btn btn-default">Previous</a>
              </li>
              <li>
                <ul class="flc-pager-links dl-pager-links">
                  <li class="flc-pager-pageLink dl-pager-pageLink-default"><a href="javascript:;" class="btn btn-default fl-pager-currentPage" id="page-link:link1">1</a></li>
                  <li class="flc-pager-pageLink dl-pager-pageLink-default"><a href="javascript:;" class="btn btn-default" id="page-link:link2">2</a></li>
                </ul>
              </li>
              <li class="flc-pager-next dl-pager-next"><a href="javascript:;" title="Next Page" class="btn btn-default">Next</a></li>
            </ul>
          </div>
          <div class="fl-container-flex dl-pager-table-data fl-pager-data table-responsive fl-pager">
            <table class="dl-table table">
              <thead>
                <tr>
                  <th class="flc-pager-sort-header" id="header::name"><a href="javascript:;">Benefit</a></th>
                  <th class="flc-pager-sort-header" id="header::coverage"><a href="javascript:;">Coverage</a></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="dl-data-text"><span>State Group Health</span></td>
                  <td class="dl-data-text"><span>Single</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>EPIC Benefits+</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>Dental Wisconsin</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>VSP Vision Insurance</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>State Group Life - Basic</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>State Group Life-Supplemental</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>State Group Life - Additional</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>State Group Life - Sp/DP &amp; Dep</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>Ind &amp; Fam Life - Employee</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr><tr>
                  <td class="dl-data-text"><span>Ind &amp; Fam Life - Spouse/DP</span></td>
                  <td class="dl-data-text"><span>Waive</span></td>
                </tr>
              </tbody>
            </table>
          </div>
            
          <div class="flc-pager-bottom dl-pager-navbar center" style="display: block;" id="fluid-id-7">
            <ul class="dl-pager-bar fl-pager-ui uw-pager-bar">
              <li class="flc-pager-previous dl-pager-previous fl-pager-disabled">
                <a href="javascript:;" title="Previous Page" class="btn btn-default">Previous</a>
              </li>
              <li>
                <ul class="flc-pager-links dl-pager-links">
                  <li class="flc-pager-pageLink dl-pager-pageLink-default"><a href="javascript:;" class="btn btn-default fl-pager-currentPage" id="page-link:link1-1">1</a></li>
                  <li class="flc-pager-pageLink dl-pager-pageLink-default"><a href="javascript:;" class="btn btn-default" id="page-link:link2-1">2</a></li>
                </ul>
              </li>
              <li class="flc-pager-next dl-pager-next"><a href="javascript:;" title="Next Page" class="btn btn-default">Next</a></li>
              
            </ul>
          </div>
        </div>
        <div class="center">
          <a href="https://uat.ps.wisconsin.edu/psp/hrqa-fd/EMPLOYEE/HRMS/c/W3EB_MENU.W3EB_GRID.GBL" target="blank" class="btn btn-default">View Benefits Summary Detail</a>
          <a href="https://uat.ps.wisconsin.edu/psp/hrqa-fd/EMPLOYEE/HRMS/c/W3EB_MENU.W3EB_SAV_PICK.GBL" target="blank" class="btn btn-default">Update TSA Deductions</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!--Coarse Grain Access -->
<div class="page-header">
  <h2 id='coarse-grain-access'>Coarse Grain Access</h2>
</div>

<h2>Initial Landing Before Shib Authorization</h2>
![http://goo.gl/hqaa6o](http://goo.gl/hqaa6o)
<ul style='list-style-type : circle;'>
<li>Redirect to login.wisc.edu. (This should be configured at the apache layer in most cases.)</li>
<li>After auth, redirect to the original destination. Note that shib removes # so your app should use HTML5 mode.</li>
<li>If the application has a public state, show this with notice that you can login to see personalize content.</li>
</ul>
<h2>Initial Landing After Shib Authorization</h2>
![http://goo.gl/Y7BqZ1](http://goo.gl/Y7BqZ1)
<ol style='list-style-type : circle;'>
  <li>Check if user has access on initial landing (easy security check server side).</li>
  <li> Don’t automatically redirect an unauthorized user, because the lack of context creates confusion.</li>
  <li>Present “access denied” page. If it’s an application, include the header to provide context. If applicable, this will include a link to the app’s directory page or service’s website. Otherwise, the default will have a link back to the user’s MyUW homepage.</li>
  <li>If a user session has timed out when hitting a service, redirect the user to authenticate via login.wisc.edu.</li>
</ol>

## What really makes your application secure
<ol style='list-style-type : circle;'>
<li>Applying access control on the backing JSON web services themselves.  </li>
<li>Making the UI reflect lack of access provides a better user experience to unauthorized users.  </li>
<li>Making the backing JSON web services require authorization prevents unauthorized users from doing things they are not authorized to do.</li>
</ol>

<!--End Coarse Grain Access -->