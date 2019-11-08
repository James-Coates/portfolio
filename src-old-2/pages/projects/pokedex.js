import React from "react";
// import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import projectStyles from '../../components/project.module.scss';

// Assets
import banner from '../../images/projects/pokedex/banner.jpg';
import jsIcon from '../../images/js-icon.svg';
import mockup1 from '../../images/projects/pokedex/mockup1.jpg';
import mockup2 from '../../images/projects/pokedex/mockup2.jpg';

const ello = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Portfolio" />
    
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title">Pokedex</h1>
        <p className="page-lead">
        A small web app built in HTML, CSS and Javascript that loads data from the Pokemon API and 
        enables viewing of Pokemon in further detail in the form of a ‘Pokedex’.
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

        <div className="text-container">
          <h3 className="sub-heading">Objective</h3>
          <p>
          The goal for the application is to allow the user to browse through a list and access further 
          information on a list of Pokemon. The application is to fetch data from the external Pokemon API 
          and display this information in a user friendly form such as clicking on a selected Pokemon.
          </p>
        </div>

        <div>
          <div className="text-container p-b-s">
            <h3 className="sub-heading">Build</h3>
            <p>
              The design is simple with two main screens as shown in the mockups. Once the user selects a Pokemon
              the details are shown on a seperate screen.
            </p>
          </div>

          <div className={`p-b-l ${projectStyles.row}`}>
            <div className={projectStyles.col2}>
              <img className={`w-100 ${projectStyles.projImg}`} src={mockup1} />
            </div>
            <div className={projectStyles.col2}>
              <img className={`w-100 ${projectStyles.projImg}`} src={mockup2} />
            </div>
          </div>

          <div className="text-container p-b-s">
            <h3 className="sub-heading">The Tech Stack</h3>
            <p>
              The pokedex application is built in HTML, CSS and vanilla Javascript.
            </p>
          </div>

          <div class={projectStyles.webStack}>
            <img src={jsIcon} alt="" />
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default ello;