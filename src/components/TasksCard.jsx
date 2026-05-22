import { Card } from '@heroui/react';

import Link from 'next/link';
import React from 'react';

const TasksCard = ({ task }) => {

  const { title, description } = task;
  return (
    <Card variant="primary" className="border-2 border-primary">
      
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
        
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TasksCard;