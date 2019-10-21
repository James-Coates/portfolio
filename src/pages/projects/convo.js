import React from "react";
// import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import projectStyles from '../../components/project.module.scss';

// Assets
import banner from '../../images/projects/convo/banner.jpg';
import reactIcon from '../../images/react-icon.svg';
import expoIcon from '../../images/expo-icon.svg';

const convo = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Portfolio" />
    
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title">CONVO</h1>
        <p className="page-lead">
        A native mobile chat app running on iOS and Android. Built with React Native the application provides 
        an interface for users to send messages, images and their location. 
        </p>
        <a href="https://james-coates.github.io/cf-pokedex/" target="blank" class="btn">Visit Site</a>
        <a href="https://github.com/James-Coates/cf-pokedex" target="blank" class="btn">See on GitHub</a>
      </div>
    </div>
    <div className="wrap">
      <div className="container flex-fill text-center p-b-l">
        <div className={projectStyles.banner__container}>
          <img className={projectStyles.banner__img} src={banner} />
        </div>

        <div className={projectStyles.container}>
          <h3 className="sub-heading">Objective</h3>
          <p>
          A chat application that allows users to send messages across mobile devices. The app is to provide 
          and interface to share images and current location.
          </p>
        </div>

        <div className={projectStyles.container}>
          <h3 className="sub-heading">Tech Stack</h3>
          <p>
            CONVO is a React Native application bootstrapped off of the expo platform. CONVO uses a 
            number of API's provided by the expo framework to
            facilitate image sharing, location sharing within the chat app. 
          </p>
          <div class={projectStyles.webStack}>
            <img src={reactIcon} alt="" />
            <img src={expoIcon} alt="" />
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default convo;