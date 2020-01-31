import React from 'react';

import SeoHead from 'components/Common/Seo/SeoHead';
import {
  BoxingIcon,
  FruitBasket,
  SaleIcon,
  TruckIcon,
} from 'resources/svg/FooterTopIcons';
import { Row, Col } from '@snappmarket/ui';
import aboutUsMessages from 'constants/Messages/aboutUs.messages';
import {
  StyledAboutUsWrapper,
  StyledContentContainer,
  StyledAboutUsContentWrapper,
  StyledAboutUsItemWrapper,
  StyledAboutUsItem,
} from './styles';

const AboutUs = () => (
  <>
    <SeoHead title={aboutUsMessages.pageTitle} />
    <StyledAboutUsWrapper>
      <StyledContentContainer>
        <StyledAboutUsContentWrapper className="text-center">
          <h1>{aboutUsMessages.title}</h1>
          <p>{aboutUsMessages.content}</p>
          <h2>{aboutUsMessages.title2}</h2>
          <StyledAboutUsItemWrapper>
            <Row>
              <Col md={3} xs={12}>
                <StyledAboutUsItem>
                  <div>
                    <FruitBasket />
                  </div>
                  <span>{aboutUsMessages.bestProductTitle}</span>
                  <p>{aboutUsMessages.bestProductContent}</p>
                </StyledAboutUsItem>
              </Col>
              <Col md={3} xs={12}>
                <StyledAboutUsItem>
                  <div>
                    <TruckIcon />
                  </div>
                  <span>{aboutUsMessages.productDeliveryTitle}</span>
                  <p>{aboutUsMessages.productDeliveryContent}</p>
                </StyledAboutUsItem>
              </Col>
              <Col md={3} xs={12}>
                <StyledAboutUsItem>
                  <div>
                    <SaleIcon />
                  </div>
                  <span>{aboutUsMessages.productDiscountTitle}</span>
                  <p>{aboutUsMessages.productDiscountContent}</p>
                </StyledAboutUsItem>
              </Col>
              <Col md={3} xs={12}>
                <StyledAboutUsItem>
                  <div>
                    <BoxingIcon />
                  </div>
                  <span>{aboutUsMessages.productPackagingTitle}</span>
                  <p>{aboutUsMessages.productPackagingcontent}</p>
                </StyledAboutUsItem>
              </Col>
            </Row>
          </StyledAboutUsItemWrapper>
          <h2>{aboutUsMessages.title3}</h2>
          <p>{aboutUsMessages.content2}</p>
        </StyledAboutUsContentWrapper>
      </StyledContentContainer>
    </StyledAboutUsWrapper>
  </>
);

export default AboutUs;
