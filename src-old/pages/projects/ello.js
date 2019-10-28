import React from "react";
// import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import projectStyles from '../../components/project.module.scss';

// Assets
import banner from '../../images/projects/ello/banner.png';
import reactIcon from '../../images/react-icon.svg';

const ello = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Portfolio" />
    
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title">ello*</h1>
        <p className="page-lead">
          ello* is a progressive web application integrating with the Meetup API to provides users with access to
          all the Meetup events. Browse through events in your area or search events in any city across the globe.          
        </p>
        <a href="https://james-coates.github.io/meetup/" target="blank" class="btn">Visit Site</a>
        <a href="https://github.com/James-Coates/meetup" target="blank" class="btn">See on GitHub</a>
      </div>
    </div>
    <div className="wrap">
      <div className="container flex-fill text-center p-b-l">
        <div className={projectStyles.banner__container}>
          <img className={projectStyles.banner__img} src={banner} />
        </div>

        <div>
          <h3 className="sub-heading">Tech Stack and Build</h3>
          <p>
            ello is a progressive web application (PWA) that uses serverless functions to interact with and serve data from
            the Meetup API.
          </p>
          <p>
            The application was built using a test driven development approach on the React framework using
            Jest and Puppetteer for testing purposes.
          </p>
          <div class={projectStyles.webStack}>
            <img src={reactIcon} alt="" />
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default ello;