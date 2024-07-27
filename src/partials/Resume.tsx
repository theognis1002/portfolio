import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

// const Resume = () => (
//   <Section
//     title={
//       <>
//         <GradientText>Resume</GradientText>
//       </>
//     }
//   >
//     <div className="flex flex-col gap-6">
//       <Project
//         name="Summit Technology Group"
//         description="Led a diverse team of global and stateside software engineers in the financial services and small business lending sector, driving the development of innovative software solutions. I defined the technical vision and strategy, creating roadmaps that ensured alignment with business objectives and effectively addressed customer needs.
// Key Accomplishments:
// • Directed the development of scalable and robust software solutions using Python (Django), JavaScript (Vue.js), and other relevant technologies.
// • Championed the adoption of best practices and industry standards, driving continuous improvement and technical excellence, which led to a 25% decrease in development time and a 20% increase in overall code quality.
// • Conducted daily code reviews and mentored junior to senior developers, improving overall code quality and ensure adherence to best practices
// • Collaborated with cross-functional teams to def ine project requirements, scope, and deliverables, ensuring the successful execution of software projects."
//         link="/"
//         img={{
//           src: '/assets/images/project-web-design.png',
//           alt: 'Summit Technology Group',
//         }}
//         category={
//           <>
//             <Tags color={ColorTags.EMERALD}>Django</Tags>
//             <Tags color={ColorTags.SKY}>Django Rest Framework</Tags>
//             <Tags color={ColorTags.SLATE}>PostgreSQL</Tags>
//             <Tags color={ColorTags.LIME}>Celery</Tags>
//             <Tags color={ColorTags.GREEN}>Vue.js</Tags>
//             <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
//             <Tags color={ColorTags.YELLOW}>AWS</Tags>
//           </>
//         }
//       />
//       <Project
//         name="Bluestone Analytics, CACI"
//         description="Engineered scalable, security-focused web applications using both Django/Flask Python web frameworks, PostgreSQL, MySQL, Redis, Celery, and Docker, incorporating complex algorithms and data structures.

//         • Developed and maintained an enterprise-level API in Node.js, OSINT data collection, ETL pipelines, and
// internal applications, utilizing Elasticsearch and various AWS services including EC2, S3, Lambda, API
// Gateway, ECS, ElastiCache, and IAM.

// • Collaborated in a fast-paced, cross-departmental environment to assist in the development and
// maintenance of frontend UI written in React.js."
//         link="/"
//         img={{
//           src: '/assets/images/project-fire.png',
//           alt: 'Bluestone Analytics, CACI',
//         }}
//         category={
//           <>
//             <Tags color={ColorTags.EMERALD}>Django</Tags>
//             <Tags color={ColorTags.ROSE}>Flask</Tags>
//             <Tags color={ColorTags.SKY}>React.js</Tags>
//             <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
//             <Tags color={ColorTags.EMERALD}>Node.js</Tags>
//             <Tags color={ColorTags.YELLOW}>AWS</Tags>
//             <Tags color={ColorTags.PURPLE}>Terraform</Tags>
//           </>
//         }
//       />
//       <Project
//         name="Ticket Edge"
//         description="
// • Spearheaded the end-to-end development of a SaaS application, leveraging a robust technology stack including Python, Django, React.js, PostgreSQL, Redis, and Celery.
// • Led a team of 12 offshore backend and frontend developers, driving the successful completion of multiple high-impact projects. Improved project delivery time by 30% through effective coordination and management of cross-functional teams.
// • Improved PostgreSQL database performance by 35% through query optimization and indexing"
//         link="/"
//         img={{ src: '/assets/images/project-maps.png', alt: 'Ticket Edge' }}
//         category={
//           <>
//             <Tags color={ColorTags.EMERALD}>Django</Tags>
//             <Tags color={ColorTags.SKY}>Django Rest Framework</Tags>
//             <Tags color={ColorTags.SLATE}>PostgreSQL</Tags>
//             <Tags color={ColorTags.GREEN}>MongoDB</Tags>
//             <Tags color={ColorTags.LIME}>Celery</Tags>
//             <Tags color={ColorTags.SKY}>React.js</Tags>
//             <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
//             <Tags color={ColorTags.YELLOW}>AWS</Tags>
//           </>
//         }
//       />
//     </div>
//   </Section>
// );
const Resume = () => (
  <Section
    title={
      <>
        <GradientText>Resume</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {/* Summit Technology Group */}
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3">
        {/* <img
          src="/assets/images/project-web-design.png"
          alt="Summit Technology Group"
          className="w-full rounded-md object-cover md:w-1/4"
        /> */}
        <div className="flex flex-col p-5">
          <h3 className="mb-2 text-xl font-bold">
            Director of Software Engineering - Summit Technology Group
          </h3>
          <div className="mb-2 flex flex-wrap gap-2">
            <Tags color={ColorTags.EMERALD}>Django</Tags>
            <Tags color={ColorTags.SKY}>Django Rest Framework</Tags>
            <Tags color={ColorTags.SLATE}>PostgreSQL</Tags>
            <Tags color={ColorTags.LIME}>Celery</Tags>
            <Tags color={ColorTags.GREEN}>Vue.js</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.YELLOW}>AWS</Tags>
          </div>
          <div>
            <ul className="ml-10 mt-5  list-disc">
              <li>
                Led a diverse team of global and stateside software engineers in
                the financial services and small business lending sector,
                driving the development of innovative software solutions. I
                defined the technical vision and strategy, creating roadmaps
                that ensured alignment with business objectives and effectively
                addressed customer needs.
              </li>
              <li>
                Directed the development of scalable and robust software
                solutions using Python (Django), JavaScript (Vue.js), and other
                relevant technologies.
              </li>
              <li>
                Championed the adoption of best practices and industry
                standards, driving continuous improvement and technical
                excellence, which led to a 25% decrease in development time and
                a 20% increase in overall code quality.
              </li>
              <li>
                Conducted daily code reviews and mentored junior to senior
                developers, improving overall code quality and ensure adherence
                to best practices
              </li>
              <li>
                Collaborated with cross-functional teams to define project
                requirements, scope, and deliverables, ensuring the successful
                execution of software projects.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bluestone Analytics, CACI */}
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3">
        {/* <img
          src="/assets/images/project-fire.png"
          alt="Bluestone Analytics, CACI"
          className="w-full rounded-md object-cover md:w-1/4"
        /> */}
        <div className="flex flex-col p-5">
          <h3 className="mb-2 text-xl font-bold">
            Senior Fullstack Engineer - Bluestone Analytics, CACI
          </h3>
          <div className="mb-2 flex flex-wrap gap-2">
            <Tags color={ColorTags.EMERALD}>Django</Tags>
            <Tags color={ColorTags.ROSE}>Flask</Tags>
            <Tags color={ColorTags.SKY}>React.js</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Node.js</Tags>
            <Tags color={ColorTags.YELLOW}>AWS</Tags>
            <Tags color={ColorTags.PURPLE}>Terraform</Tags>
          </div>
          <div>
            <ul className="ml-10 mt-5  list-disc">
              <li>
                Engineered scalable, security-focused web applications using
                both Django/Flask Python web frameworks, PostgreSQL, MySQL,
                Redis, Celery, and Docker, incorporating complex algorithms and
                data structures.
              </li>
              <li>
                Developed and maintained an enterprise-level API in Node.js,
                OSINT data collection, ETL pipelines, and internal applications,
                utilizing Elasticsearch and various AWS services including EC2,
                S3, Lambda, API Gateway, ECS, ElastiCache, and IAM.
              </li>
              <li>
                Collaborated in a fast-paced, cross-departmental environment to
                assist in the development and maintenance of frontend UI written
                in React.js.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ticket Edge */}
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3">
        {/* <img
          src="/assets/images/project-maps.png"
          alt="Ticket Edge"
          className="w-full rounded-md object-cover md:w-1/4"
        /> */}
        <div className="flex flex-col p-5">
          <h3 className="mb-2 text-xl font-bold">
            Lead Software Engineer - Ticket Edge
          </h3>
          <div className="mb-2 flex flex-wrap gap-2">
            <Tags color={ColorTags.EMERALD}>Django</Tags>
            <Tags color={ColorTags.SKY}>Django Rest Framework</Tags>
            <Tags color={ColorTags.SLATE}>PostgreSQL</Tags>
            <Tags color={ColorTags.GREEN}>MongoDB</Tags>
            <Tags color={ColorTags.LIME}>Celery</Tags>
            <Tags color={ColorTags.SKY}>React.js</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.YELLOW}>AWS</Tags>
          </div>
          <div>
            <ul className="ml-10 mt-5 list-disc">
              <li>
                Spearheaded the end-to-end development of a SaaS application,
                leveraging a robust technology stack including Python, Django,
                React.js, PostgreSQL, Redis, and Celery.
              </li>
              <li>
                Led a team of 12 offshore backend and frontend developers,
                driving the successful completion of multiple high-impact
                projects. Improved project delivery time by 30% through
                effective coordination and management of cross-functional teams.
              </li>
              <li>
                Improved PostgreSQL database performance by 35% through query
                optimization and indexing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
export { Resume };
