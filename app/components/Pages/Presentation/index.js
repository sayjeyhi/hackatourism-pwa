import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SeoHead from 'components/Common/Seo/SeoHead';
import { getNextProp } from '@snappmarket/helpers';

import { StyledPresentationHolder, StyledChooseStepButton, StyledTeam } from './styles';

export default () => {
  const params = useParams();
  const history = useHistory();
  const { step } = params;

  const stepsList = {
    1: 'hi',
    2: 'what-is-koleposhti',
    3: 'why-koleposhti',
    4: 'is-this-a-joke',
    5: 'feature',
    6: 'team',
    7: 'technical',
  };

  const getKeyByValue = (object, value) =>
    Object.keys(object).find(key => object[key] === value);

  const MovementsButtons = () => {
    const handleIncreaseStep = () => {
      const currentKey = getKeyByValue(stepsList, step);
      const newStep = getNextProp(stepsList, currentKey);

      history.push(`/presentation/${newStep}`);
    };

    const handlePrevStep = window.history.back;
    return (
      <StyledChooseStepButton>
        <button
          type="button"
          onClick={handlePrevStep}
          className="next no-effect-name"
        >
          قبلی
        </button>
        <button
          type="button"
          onClick={handleIncreaseStep}
          className="next no-effect-name"
        >
          بعدی
        </button>
      </StyledChooseStepButton>
    );
  };

  return (
    <>
      <SeoHead title="ارائه تیم کوله‌پشتی" />
      <StyledPresentationHolder className="text-huge text-bold text-gray-normal align-center justify-center">
        {step === 'hi' ? (
          <>
            سلام!
            <br />
            من جعفررضايي هستم
            <MovementsButtons />
          </>
        ) : step === 'what-is-koleposhti' ? (
          <>
            <span className="text-green-normal">کوله‌پشتی چیه؟</span>
            <br />
            از اول تا آخر سفر باهاتونیم!
            <MovementsButtons />
          </>
        ) : step === 'why-koleposhti' ? (
          <>
            <span className="text-green-normal">چرا کوله‌پشتی؟</span>
            <br />
            دوران سنتی فکر کردن تموم شده... دانرو . نزدیکا ، ...
            <MovementsButtons />
          </>
        ) : step === 'is-this-a-joke' ? (
          <>
            <span className="text-green-normal">واقعا ممکنه؟</span>
            <br />
            بله، الان خدمتتون دمو می‌کنیم :)
            <MovementsButtons />
          </>
        ) : step === 'feature' ? (
          <>
            <span className="text-green-normal">
              {' '}
              آینده کوله‌پشتی کجاست؟ و قراره به کجا برسه؟
            </span>
            <br />
            کوله‌پشتی‌ها خراب هم بشن باز به عنوان خورجین استفاده میشن
            <br />
            کوله‌پشتی ما تازه اول راهه، طبق متریک‌هامون کلی جای خالی توی حوزه
            گردشگری هست
            <MovementsButtons />
          </>
        ) : step === 'team' ? (
          <>
            <span className="text-green-normal">
              دوزندگان کوله‌پشتی‌ کیا هستن؟
            </span>
            <br />
            ما ۵ نفر، تو این سه روز یه کوله‌پشتی کوچیک دوختیم !
            <br />
            <StyledTeam>
              <div className=""></div>
            </StyledTeam>
            <MovementsButtons />
          </>
        ) : step === 'technical' ? (
          <>
            <span className="text-green-normal">
              {' '}
              تکنولوژی‌های مورد استفاده‌مون
            </span>
            <br />

            <div>Frontend: [ReactJs, redux, saga]</div>
            <div>Backend: [docker, ha-proxy, laravel]</div>
            <MovementsButtons />
          </>
        ) : (
          '404'
        )}
      </StyledPresentationHolder>
    </>
  );
};
