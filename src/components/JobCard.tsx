import { Tags } from 'astro-boilerplate-components';
import React from 'react';

interface JobCardProps {
  title: string;
  dateRange: string;
  tags: Array<any>;
  description: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  dateRange,
  tags,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3">
      <div className="flex flex-col p-5">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-500">{dateRange}</p>
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tags key={index} color={tag.color}>
              {tag.label}
            </Tags>
          ))}
        </div>
        <div>
          <ul className="ml-10 mt-5 list-disc">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
