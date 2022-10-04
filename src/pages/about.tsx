import React from 'react';
import {Layout, Seo} from '../components'
import {About} from '../screens'

const AboutPage = () => {
  return (
<>
  <Seo title="LundLabs | About" />
  <Layout>
    <About />
  </Layout>
  </>
  );
};

export default AboutPage;
