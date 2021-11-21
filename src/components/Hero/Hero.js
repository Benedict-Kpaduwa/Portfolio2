import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi. <br />
        I am Benedict Kpaduwa
      </SectionTitle>
      <SectionText>
        I'm a full stack software engineer skilled with 2 years experience
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
    
  </Section>
);

export default Hero;