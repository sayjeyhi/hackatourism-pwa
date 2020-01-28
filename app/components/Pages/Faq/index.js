import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@snappmarket/ui';

import SeoHead from 'components/Common/Seo/SeoHead';

import {
  BoxingIcon,
  FruitBasket,
  SaleIcon,
  FollowUpIcon,
  ReturnProduct,
  OtherCases,
  MostQuestion,
  RegisterIcon,
} from 'resources/svg/FaqIcons';

import faqMessages from 'constants/Messages/faq.messages';
import routes from 'components/Common/Router/routes';
import FaqAccordion from './partials/FaqAccordion';
import {
  StyledFaqWrapper,
  StyledFaqItemWrapper,
  StyledFaqTopSection,
  StyledIconWrapper,
  StyledItemTitle,
  StyledFaqQuestionWrapper,
} from './styles';

const Faq = () => {
  const { step = 'register' } = useParams();
  const steps = {
    register: {
      icon: <RegisterIcon />,
      title: faqMessages.registration,
      content: faqMessages.FaqContent.register,
    },
    order: {
      icon: <BoxingIcon />,
      title: faqMessages.orderSubmit,
      content: faqMessages.FaqContent.order,
    },
    voucher: {
      icon: <SaleIcon />,
      title: faqMessages.voucherCode,
      content: faqMessages.FaqContent.voucher,
    },
    quality: {
      icon: <FruitBasket />,
      title: faqMessages.productQuality,
      content: faqMessages.FaqContent.quality,
    },
    followUp: {
      icon: <FollowUpIcon />,
      title: faqMessages.followUpOrder,
      content: faqMessages.FaqContent.followUp,
    },
    returnProduct: {
      icon: <ReturnProduct />,
      title: faqMessages.returnProduct,
      content: faqMessages.FaqContent.return,
    },
    mostQuestion: {
      icon: <MostQuestion />,
      title: faqMessages.mostQuestion,
      content: faqMessages.FaqContent.mostQuestion,
    },
    otherCases: {
      icon: <OtherCases />,
      title: faqMessages.otherCases,
      content: faqMessages.FaqContent.otherCases,
    },
  };
  return (
    <>
      <SeoHead title={faqMessages.pageTitle} />
      <StyledFaqWrapper className="text-center full-width">
        <h1>{faqMessages.faqTitle}</h1>
        <StyledFaqTopSection className="mb-3 mt-3">
          <Grid perRow={8} className="text-center">
            {Object.keys(steps).map(key => (
              <StyledFaqItemWrapper
                className="justify-center p-0 m-0"
                key={key}
              >
                <Link to={`${routes.info.faq.path}/${key}`}>
                  <StyledIconWrapper>{steps[key].icon}</StyledIconWrapper>
                  <StyledItemTitle active={step === key}>
                    {steps[key].title}
                  </StyledItemTitle>
                </Link>
              </StyledFaqItemWrapper>
            ))}
          </Grid>
        </StyledFaqTopSection>

        <StyledFaqQuestionWrapper>
          {steps[step].content.map(key => (
            <FaqAccordion title={key.title} content={key.content} />
          ))}
        </StyledFaqQuestionWrapper>
      </StyledFaqWrapper>
    </>
  );
};

export default Faq;
