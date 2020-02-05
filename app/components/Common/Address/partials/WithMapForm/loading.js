import React from 'react';

import { BoxSkeleton } from '@snappmarket/ui';

const Loading = () => (
  <>
    <div className="align-center direction-row">
      <BoxSkeleton className="bg-white" key="NAME_LABEL" width="50%">
        <BoxSkeleton width="20%" height={2} radius={0.5} />
      </BoxSkeleton>
      <BoxSkeleton className="bg-white mr-1" key="PHONE_LABEL" width="50%">
        <BoxSkeleton width="20%" height={2} radius={0.5} />
      </BoxSkeleton>
    </div>
    <div className="align-center direction-row">
      <BoxSkeleton key="NAME" width="50%" height={4} radius={0.5} justBorder />
      <BoxSkeleton
        className="mr-1"
        key="PHONE"
        width="50%"
        height={4}
        radius={0.5}
        justBorder
      />
    </div>
    <BoxSkeleton
      key="ADDRESS_LABEL"
      className="mt-1"
      width="20%"
      height={2}
      radius={0.5}
    />
    <BoxSkeleton
      className="mt-1"
      key="ADDRESS"
      width="100%"
      height={10}
      radius={0.5}
      justBorder
    />
    <BoxSkeleton
      key="MAP"
      className="mt-1"
      width="100%"
      height={20}
      radius={0.5}
    />
  </>
);

export default Loading;
