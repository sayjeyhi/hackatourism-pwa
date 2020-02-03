import React from 'react';
import SeoHead from 'components/Common/Seo/SeoHead';
import PlusIcon from 'resources/svg/Icons/PlusIcon';
import Footer from 'components/Common/Layout/partials/Footer';
import { Button, TabSwitcher, Tab, TabPanel } from '@snappmarket/ui';

import {
  StyledProfileWrapper,
  StyledProfileSidebar,
  StyledProfileContent,
} from './styles';

const Profile = () => (
  <>
    <SeoHead title="پروفایل کاربری" />
    <StyledProfileWrapper>
      <StyledProfileSidebar>
        <div className="user-avatar">
          <img
            src="https://www.gravatar.com/avatar/d08fcf59fd25c84ff92105e3d0747a7e?s=328&d=identicon&r=PG"
            alt="user"
          />
        </div>
        <div className="user-name">Jafar Rezaei</div>
        <div className="user-joined justify-between">
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
        <TabSwitcher initialTab="images">
          <Tab id="images">تصاویر</Tab>
          <Tab id="checkouts">مکان‌هایی که بودم !</Tab>

          <TabPanel whenActive="images">تصاویر کاربر</TabPanel>
          <TabPanel whenActive="checkouts">مکانهایی که بودم</TabPanel>
        </TabSwitcher>
      </StyledProfileContent>
    </StyledProfileWrapper>
    پروفایل کاربری
  </>
);

export default Profile;
