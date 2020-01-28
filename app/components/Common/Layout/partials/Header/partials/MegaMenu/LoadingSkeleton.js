import React from 'react';

import { Col, Row, BoxSkeleton } from '@snappmarket/ui';
// import { Col, Row } from 'components/Global/GridSystem';
// import { BoxSkeleton } from 'components/Global/Skeleton';

const LoadingSkeleton = () => (
  <Row>
    <Col sm={3}>
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
    </Col>
    <Col sm={3}>
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
    </Col>
    <Col sm={3}>
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
    </Col>
    <Col sm={3}>
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
      <BoxSkeleton width="90%" height={2.6} className="mt-1" />
    </Col>
  </Row>
);

export default LoadingSkeleton;
