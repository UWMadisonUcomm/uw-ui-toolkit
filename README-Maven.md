## Maven Support

A Maven pom is provided to allow us to publish this artifact to [Maven Central](http://search.maven.org).
  
This pom is modeled after the poms used by the [WebJars Project](http://www.webjars.org/). 

### Maven Dependency Information

Adding this project to your existing Maven projects is as simple as adding the following to your `<dependencies>`:

    <dependency>
      <groupId>edu.wisc.umark</groupId>
      <artifactId>uw-ui-toolkit</artifactId>
      <version>0.2.2</version>
    </dependency>

### Local Maven Build How To

*This step is not necessary for most use cases.*

If you have local modifications of this project you need to depend on, and want to install locally, simply execute to create a jar and install
it in your local maven repository:

    mvn install

Requires Maven be installed and on your PATH.    
Maven will download the specified release from github (controlled via the *upstreamVersion* property), unpack it into
the target directory, and repack with the folders in the correct locations per the Servlet 3.0 Resources specification.

### Performing Maven Releases

To perform a Maven release, you must have the following authorizations:

1. push access to https://github.com/UWMadisonUcomm/uw-ui-toolkit.
2. Ability to publish to the `edu.wisc.uc` groupId in Maven Central. These permissions are maintained by [Sonatype](http://central.sonatype.org/pages/ossrh-guide.html). Contact the developers of this project if you'd like to request access.

Once those grants are in place:

1. Set the `upstreamVersion` property in pom.xml to match the latest release available at https://github.com/UWMadisonUcomm/uw-ui-toolkit/releases.
2. Verify the build succeeds with a *mvn install*
3. If successful, continue the release:
    1. *mvn release:prepare*
    2. *mvn release:perform*
    
During the prepare goal, when prompted for the release version, enter the same value you supplied for `upstreamVersion`. Accept the defaults for the tag and next version.
  
