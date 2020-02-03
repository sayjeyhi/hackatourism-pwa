import React from 'react';
import { Button } from '@snappmarket/ui';
import SeoHead from 'components/Common/Seo/SeoHead';
import Map from 'components/Common/Map';
import PlusIcon from 'resources/svg/Icons/PlusIcon';
import Footer from 'components/Common/Layout/partials/Footer';
import Comments from './Partials/Comments';
import Claim from './Partials/Claim';

import {
  StyledProfileWrapper,
  StyledProfileSidebar,
  StyledProfileContent,
} from './styles';

const Place = () => (
  <>
    <SeoHead title="صفحه محل" />
    <StyledProfileWrapper>
      <StyledProfileSidebar>
        <div className="place-wallpaper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,170.7C672,181,768,171,864,154.7C960,139,1056,117,1152,138.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="place-avatar">
          <img
            src="https://www.gravatar.com/avatar/d08fcf59fd25c84ff92105e3d0747a7e?s=328&d=identicon&r=PG"
            alt="user"
          />
        </div>
        <div className="place-name">عنوان بیزینس</div>
        <div className="place-joined justify-between">
          <span>عضویت :</span>
          <span>۱۳۹۸/۱۱/۱۴</span>
        </div>
        ‌
        <Button
          color="blue"
          className="follow-button"
          icon={PlusIcon}
          title="دنبال کردن"
        />
        <Footer />
      </StyledProfileSidebar>

      <StyledProfileContent>
        <Map
          searchForm={false}
          locationAccess={false}
          initialPosition={{
            lat: 35.1,
            lng: 31.2,
          }}
          isStatic
        />

        <Comments />
        <Claim />
      </StyledProfileContent>
    </StyledProfileWrapper>
  </>
);

export default Place;
