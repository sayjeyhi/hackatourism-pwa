import { useState } from 'react';
import useDimensions from 'react-use-dimensions';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

/**
 * Will create a ref to element that will fixed position on some pos till some pos
 * @param wait
 * @param startPos
 * @param endPos
 * @returns {{stickyRef: *, stickyStyles: *}}
 */
const useStickWithScroll = ({ wait, startPos, endPos }) => {
  const [stickyStyles, setStickyStyles] = useState({});
  const [ref, { x, width }] = useDimensions();
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > startPos) {
        setStickyStyles({
          width,
          left: x,
          top: 0,
          position: 'fixed',
        });
      } else if (endPos && currPos.y < endPos) {
        // todo : this part did not tested and maybe has bugs
        setStickyStyles({
          width,
          left: x,
          top: endPos,
          position: 'fixed',
        });
      } else {
        setStickyStyles({});
      }
    },
    [stickyStyles, setStickyStyles],
    null,
    true,
    wait,
  );

  return {
    stickyRef: ref,
    stickyStyles,
  };
};

export default useStickWithScroll;
