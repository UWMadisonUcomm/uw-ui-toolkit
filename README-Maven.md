## Maven Support

A Maven pom is provided to allow us to publish this artifact to the [Shared Tools Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/display/ST/Maven+Repository+Manager).
  
This pom is modeled after the poms used by the [WebJars Project](http://www.webjars.org/). 

### Maven Dependency Information

The dependency can then be referenced via:

    <dependency>
      <groupId>edu.wisc.uc</groupId>
      <artifactId>uw-ui-toolkit</artifactId>
      <version>0.2.0</version>
    </dependency>
    
-SNAPSHOTS and releases are published in the Shared Tools *Public Releases* repository.

### Local Maven Build How To

If you have local modifications you need to depend on, and want to install locally, simply execute to create a jar and install
it in your local maven repository:

    mvn install

Requires Maven be installed and on your PATH.    
Maven will download the specified release from github (controlled via the *upstreamVersion* property), unpack it into
the target directory, and repack with the folders in the correct locations per the Servlet 3.0 Resources specification.

*This step is not necessary for most, simply reference the Shared Tools Public releases repository in your pom*.

### Performing Maven Releases

To perform a Maven release, you must have the following authorizations:

1. push access to https://github.com/UWMadisonUcomm/uw-ui-toolkit.
2. The *edu.wisc.uc - DEPLOYER* Role in the [Shared Tools Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/display/ST/Maven+Repository+Manager).

Once those grants are in place:

1. Set the `upstreamVersion` property in pom.xml to match the latest release available at https://github.com/UWMadisonUcomm/uw-ui-toolkit/releases.
3. Verify the build succeeds with a *mvn install*
4. If successful, continue the release:
    1. *mvn release:prepare*
    2. *mvn release:perform*
    
During the prepare goal, when prompted for the release version, enter the same value you supplied for `upstreamVersion`. Accept the defaults for the tag and next version.
  
