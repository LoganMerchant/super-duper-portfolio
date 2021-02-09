import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <>
      <Row style={{ paddingBottom: "2rem" }}>
        <Col sm={12} md={6}>
          <h1>About Me</h1>
        </Col>
        <Col sm={12} md={6}>
          <Image
            fluid
            roundedCircle
            src={require("../assets/images/misc/self.jpg").default}
            alt="Logan posing in front of Lake Michigan."
          />
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            hendrerit dui, eu luctus dolor eleifend quis. Morbi nec molestie
            elit. Mauris in ex et magna egestas lacinia. Donec non risus id diam
            sagittis aliquam. Suspendisse a nunc vestibulum, tempus est sed,
            vestibulum libero. Phasellus congue nunc sed lectus dapibus, id
            rutrum ante dapibus. Nullam et tellus ut nibh mollis tristique.
            Mauris consequat velit eu nisl euismod dignissim. Sed augue nisl,
            rutrum eget sagittis ut, placerat at ante. Mauris rhoncus nisi vel
            ante malesuada viverra. Integer est velit, dapibus in varius in,
            tristique ut sapien. Mauris gravida ipsum nec laoreet tempus. Aenean
            neque leo, elementum at hendrerit id, tincidunt at ex. Aliquam id
            congue ex. Donec dui quam, mollis et metus ac, accumsan varius
            felis. Integer ut varius diam. Sed sit amet vehicula felis. Aenean
            vestibulum sem vel felis gravida mattis. Mauris finibus nunc tellus,
            vel consequat sapien tempus eu. Ut nec rhoncus dui. Donec nec magna
            vitae turpis imperdiet aliquam. In id cursus lacus. Donec arcu elit,
            condimentum vitae lacinia id, luctus quis odio. Suspendisse sed
            velit lorem. Suspendisse pretium ex ut luctus rutrum. Aliquam sit
            amet nisi blandit, fringilla odio nec, rhoncus tortor. Duis accumsan
            lacus mauris, non auctor metus pretium a. Nunc diam augue, viverra
            quis convallis vel, tempor sed neque. In ullamcorper, odio non
            scelerisque egestas, nunc odio egestas dolor, vel rutrum est arcu eu
            velit. Sed lacinia nisi et iaculis laoreet. Pellentesque ut tellus
            eget massa mollis sollicitudin ac at enim. Nullam sit amet arcu at
            tortor mattis tincidunt. Integer finibus luctus mauris, non
            vulputate justo cursus in. Aliquam rutrum eu leo in ullamcorper. Sed
            scelerisque pulvinar augue. Nulla in ligula quis erat ultricies
            placerat. Vivamus ante libero, volutpat nec iaculis sed, rutrum sit
            amet odio. Mauris pharetra libero et neque sagittis mattis. Donec
            magna ex, interdum ac placerat eget, sollicitudin quis sem. Cras non
            ornare velit. Phasellus cursus sem quis mauris tristique, id
            lobortis dolor porttitor. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Proin ac nisi ante.
            Quisque dapibus est egestas velit interdum iaculis. Nulla bibendum
            leo eget sodales gravida. Suspendisse mollis in ante laoreet
            finibus. Sed eu neque non urna rhoncus sodales at vitae mi.
            Phasellus suscipit faucibus sapien, vitae placerat ligula lobortis
            non.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
