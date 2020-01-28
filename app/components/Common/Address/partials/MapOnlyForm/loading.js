import React from 'react';
import { BoxSkeleton } from '@snappmarket/ui';
// import { BoxSkeleton } from 'components/Global/Skeleton';

export default () => (
  <>
    <BoxSkeleton
      key="MAP"
      className="mt-1"
      width="100%"
      height={24}
      radius={0.5}
    />
    <BoxSkeleton
      key="MAP_BUTTON"
      className="mt-1"
      width="100%"
      height={4}
      radius={0.5}
    />
  </>
);
