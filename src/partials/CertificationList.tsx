import { GradientText, Section } from 'astro-boilerplate-components';

import { CertificationCard } from '@/components/CertificationCard';

const CertificationList = () => (
  <Section
    title={
      <>
        <GradientText>Certifications</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <CertificationCard
        name="AWS Certified Solutions Architect - Associate"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        certDate="9/2022"
        img={{
          src: '/assets/images/aws.png',
          alt: 'AWS Certified Solutions Architect - Associate',
        }}
        category={<></>}
      />
      <CertificationCard
        name="AWS Certified Cloud Practitioner"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        certDate="1/2021"
        img={{
          src: '/assets/images/aws.png',
          alt: 'AWS Certified Cloud Practitioner',
        }}
        category={<></>}
      />
      <CertificationCard
        name="Microsoft Certified: Azure Fundamentals"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        certDate="10/2022"
        img={{
          src: '/assets/images/azure.png',
          alt: 'Microsoft Certified: Azure Fundamentals',
        }}
        category={<></>}
      />
    </div>
  </Section>
);

export { CertificationList };
