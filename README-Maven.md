## Maven Support

A Maven pom is provided to allow us to publish this artifact to the [Shared Tools Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/display/ST/Maven+Repository+Manager).
  
This pom is modeled after the poms used by the [WebJars Project](http://www.webjars.org/). 

### Maven Dependency Information

The dependency can then be referenced via:

    <dependency>
      <groupId>edu.wisc.uc</groupId>
      <artifactId>uw-ui-toolkit</artifactId>
      <version>0.1.5</version>
    </dependency>
    
-SNAPSHOTS and releases are published in the Shared Tools *UW Releases* repository.

### Local Maven Build How To

If you have local modifications you need to depend on, and want to install locally, simply execute to create a jar and install
it in your local maven repository:

    mvn install

Requires Maven be installed and on your PATH.    
Maven will download the specified release from github (controlled via the *upstreamVersion* property), unpack it into
the target directory, and repack with the folders in the correct locations per the Servlet 3.0 Resources specification.

*This step is not necessary for most, simply reference the Shared Tools UW releases repository in your pom*.

### Maven Releases

Maven releases require push access to (https://github.com/UWMadisonUcomm/uw-ui-toolkit).

1. Set the upstreamVersion property to match the latest release available at (https://github.com/UWMadisonUcomm/uw-ui-toolkit/releases).
2. Make sure the version element matches, including a -SNAPSHOT suffix at the end.
3. Verify the build succeeds with a *mvn install*
4. If successful, continue the release:
    1. *mvn release:prepare*
    2. *mvn release:perform*
    
   
  
