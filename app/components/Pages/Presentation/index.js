import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SeoHead from 'components/Common/Seo/SeoHead';
import { getNextProp } from '@snappmarket/helpers';

import {
  StyledPresentationHolder,
  StyledChooseStepButton,
  StyledTeam,
} from './styles';

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

    return (
      <StyledChooseStepButton>
        <button
          type="button"
          onClick={() => window.history.back()}
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
            <div className="text-extra-huge">سلام!</div>
          </>
        ) : step === 'what-is-koleposhti' ? (
          <div className="flex-column">
            <span className="text-green-normal">کوله‌پشتی چیه؟</span>
            <br />
            از اول تا آخر سفر باهاتونیم!
          </div>
        ) : step === 'why-koleposhti' ? (
          <div className="flex-column">
            <span className="text-green-normal">چرا کوله‌پشتی؟</span>
            <br />
            سنتی فکر کردن تمومه. دانرو . نزدیکا ، ...
          </div>
        ) : step === 'is-this-a-joke' ? (
          <div className="flex-column">
            <span className="text-green-normal">واقعا ممکنه؟</span>
            <br />
            بله، الان خدمتتون دمو می‌کنیم :)
          </div>
        ) : step === 'feature' ? (
          <div className="flex-column">
            <span className="text-green-normal">
              {' '}
              آینده کوله‌پشتی کجاست؟ و قراره به کجا برسه؟
            </span>
            <br />
            کوله‌پشتی‌ها خراب هم بشن باز به عنوان خورجین استفاده میشن
            <br />
            کوله‌پشتی ما تازه اول راهه، طبق متریک‌هامون کلی جای خالی توی حوزه
            گردشگری هست
          </div>
        ) : step === 'team' ? (
          <div className="flex-column">
            <span className="text-green-normal">
              دوزندگان کوله‌پشتی‌ کیا هستن؟
            </span>
            <br />
            ما ۵ نفر، تو این سه روز یه کوله‌پشتی کوچیک دوختیم !
            <br />
            <StyledTeam>
              <div className="align-center">
                جعفر رضایی
                <span>Front-end and Team lead</span>
              </div>
              <div className="align-center">
                مهدی ابراهیمی
                <span>DataScientist </span>
              </div>
              <div className="align-center">
                علیرضا جنگی
                <span>Back-end and DevOps </span>
              </div>
              <div className="align-center">
                آرمان رکنی
                <span>UI design </span>
              </div>
              <div className="align-center">
                سعید تاج‌فرد
                <span>App developer </span>
              </div>
            </StyledTeam>
          </div>
        ) : step === 'technical' ? (
          <div className="flex-column">
            <span className="text-green-normal">
              {' '}
              تکنولوژی‌های مورد استفاده‌مون
            </span>
            <br />
            <div className="flex-column text-left text-gray-normal text-large">
              <div>
                AI: [tensorFlow, pyTorch, scikit-learn, numPy, pandas, flask]
              </div>
              <div>
                Backend: [Ubuntu, HAProxy, Docker, CI/CD, GitllabCI, PHP,
                Laravel, MySql, NGINX]
              </div>
              <div>
                Frontend: [CI/CD, SSR, ReactJs, redux, saga, styledComponents,
                PixelPerfect]
              </div>
              <div>APP: [ReactNative, AndroidStudio, xcode, gradle]</div>
              <div>Desgin: [Sketch, zeplin, nucleo]</div>
            </div>
          </div>
        ) : (
          '404'
        )}

        <MovementsButtons />
      </StyledPresentationHolder>
    </>
  );
};
