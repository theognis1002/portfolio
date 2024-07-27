import { GradientText, Section } from 'astro-boilerplate-components';

import awsLogo from '../../public/assets/images/aws.png';
import azureLogo from '../../public/assets/images/azure.png';
import djangoLogo from '../../public/assets/images/django.png';
import golangLogo from '../../public/assets/images/golang.png';
import mongoLogo from '../../public/assets/images/mongo.png';
import mysqlLogo from '../../public/assets/images/mysql.png';
import nextjsLogo from '../../public/assets/images/nextjs.png';
import postgresLogo from '../../public/assets/images/postgresql.png';
import pythonLogo from '../../public/assets/images/python.png';
import reactLogo from '../../public/assets/images/react.png';
import redisLogo from '../../public/assets/images/redis.png';
import vueLogo from '../../public/assets/images/vuejs.png';

const Skills = () => (
  <div className="mt-10">
    <Section
      title={
        <>
          <GradientText>Technical Skills</GradientText>
        </>
      }
    >
      <table className="w-full border-collapse">
        <tbody>
          <tr className="h-56">
            <td className="p-3">
              <a
                href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
                target="_blank"
              >
                <img
                  src={pythonLogo.src}
                  alt="Python"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://betterstack.com/?utm_source=github&utm_medium=Skillship&utm_campaign=next-js-boilerplate"
                target="_blank"
              >
                <img
                  src={djangoLogo.src}
                  alt="Django"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a href="https://nextlessjs.com">
                <img
                  src={reactLogo.src}
                  alt="React SaaS Boilerplate Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a href="https://nextlessjs.com">
                <img
                  src={nextjsLogo.src}
                  alt="React SaaS Boilerplate Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://clerk.com?utm_source=github&utm_medium=Skillship&utm_campaign=nextjs-boilerplate"
                target="_blank"
              >
                <img
                  src={vueLogo.src}
                  alt="PostgreSQL & Relational Database Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://clerk.com?utm_source=github&utm_medium=Skillship&utm_campaign=nextjs-boilerplate"
                target="_blank"
              >
                <img
                  src={golangLogo.src}
                  alt="PostgreSQL & Relational Database Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
          <tr className="h-56">
            <td className="p-3">
              <a
                href="https://clerk.com?utm_source=github&utm_medium=Skillship&utm_campaign=nextjs-boilerplate"
                target="_blank"
              >
                <img
                  src={postgresLogo.src}
                  alt="PostgreSQL & Relational Database Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://clerk.com?utm_source=github&utm_medium=Skillship&utm_campaign=nextjs-boilerplate"
                target="_blank"
              >
                <img
                  src={mysqlLogo.src}
                  alt="PostgreSQL & Relational Database Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://turso.tech/?utm_source=nextjsstarterbp"
                target="_blank"
              >
                <img
                  src={mongoLogo.src}
                  alt="MongoDB Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://turso.tech/?utm_source=nextjsstarterbp"
                target="_blank"
              >
                <img
                  src={redisLogo.src}
                  alt="Redis & AWS Elasticache Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://turso.tech/?utm_source=nextjsstarterbp"
                target="_blank"
              >
                <img
                  src={awsLogo.src}
                  alt="AWS Cloud Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="p-3">
              <a
                href="https://turso.tech/?utm_source=nextjsstarterbp"
                target="_blank"
              >
                <img
                  src={azureLogo.src}
                  alt="Azure Cloud Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  </div>
);

export { Skills };
