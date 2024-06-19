import React from 'react';
import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
import Section from './Section';

function CoreConcepts() {
    console.log("CoreConcepts");
  return (
    <Section titile = "Core Concepts" id="core-concepts">
    <ul>

      {CORE_CONCEPTS.length > 0 && CORE_CONCEPTS.map((item) =><CoreConcept
        key={item.title}
        title={item.title}
        description={item.description}
        image={item.image}
      />)}
      {/* <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
    </ul>
    </Section>
  )
}

export default CoreConcepts