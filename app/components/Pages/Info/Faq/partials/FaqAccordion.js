import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionContent,
  AccordionHead,
  Icon,
} from '@snappmarket/ui';

import {
  StyledFaqAccordion,
  StyledFaqQuestionItem,
  StyledItemHeader,
  StyledFaqItemContent,
} from '../styles';

const FaqAccordion = props => {
  const { title, content } = props;
  return (
    <StyledFaqAccordion>
      <Accordion className="section full-width">
        <AccordionHead id={title}>
          {(open, close, isOpen) => (
            <StyledFaqQuestionItem
              className={isOpen ? 'bg-blue-normal text-white' : ''}
            >
              <StyledItemHeader onClick={isOpen ? close : open}>
                <Icon
                  size={1.5}
                  className="ml-1"
                  name={isOpen ? 'angle-down' : 'angle-left'}
                />
                <h3>{title}</h3>
              </StyledItemHeader>
            </StyledFaqQuestionItem>
          )}
        </AccordionHead>
        <AccordionContent className="mt-1" whenActive={title}>
          <StyledFaqItemContent className="text-right pr-2">
            {content}
          </StyledFaqItemContent>
        </AccordionContent>
      </Accordion>
    </StyledFaqAccordion>
  );
};

FaqAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

FaqAccordion.defaultProps = {};
export default FaqAccordion;
