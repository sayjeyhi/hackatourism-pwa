import React from 'react';
import { GooglePlayButton, PlayStoreButton } from 'resources/svg/AppDownload';

import BlogPostCard from './partials/BlogPostCard';
import Footer from '../Footer';

import {
  StyledSidebar,
  StyledAdsBannerWrapper,
  StyledAdsBanner,
  StyledAppDownloadWrapper,
} from './styles';

const Sidebar = () => (
  <StyledSidebar>
    <BlogPostCard />
    <StyledAppDownloadWrapper className="app-download justify-between">
      <GooglePlayButton />
      <PlayStoreButton />
    </StyledAppDownloadWrapper>

    <StyledAdsBannerWrapper className="adsSideBar_banners">
      <StyledAdsBanner />
      <StyledAdsBanner />
    </StyledAdsBannerWrapper>
    <Footer />
  </StyledSidebar>
);

export default Sidebar;
