---
layout: my-uw-template
title: MyUW App Style Guide
slug: my-uw
---
<p class="lead">Your content in MyUW Beta is called an app. The following are the styles for apps. This page is a work in progress. These styles are all namespaced under the class 'my-uw', which affects the content of MyUW. It does not affect the sidebar, top header, or footer of MyUW.</p>
<p class="lead">You can view current apps in MyUW Beta by logging in with your NetID <a href="https://my.wisc.edu/portal/Login?profile=bucky" target="blank">here</a>.</p>
<div>

  <div class="page-header">
    <h2>App Structure</h3>
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
  </div>
  
  
  <div class="page-header">
    <h2>Text Guidelines</h2>
  </div>
  <p>'MyUW' never has a space between the letters.</p>
  <h4>App Title</h4>
  <p>30 characters maximum. Avoid the word “your.” When possible, avoid the word “my” unless it’s necessary to differentiate it from another app. (For example, an app with a list of a student’s courses would be titled “My Courses” because a “Courses” app would be a list of all courses at the university.)</p>
  <h4>App Description</h4>
  <p>80 characters maximum. Avoid the word “your.” (For example, instead of “view your earnings and tax statements,” use “view earnings and tax statements.”)</p>
  
  <div class="page-header">
    <h2>Typography</h2>
  </div>
  <p class="lead">MyUW uses a default font-weight of 200.</p>
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  
  <div class="page-header">
    <h2>Links</h2>
  </div>
  <p><a href="">Linky link</a></p>
  <p><a href="">Student center</a></p>
  
  <div class="page-header">
    <h2>Buttons</h2>
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
    <h2>Tables</h2>
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
    <h2>Search</h2>
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
  <h1>App Examples</h1>
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