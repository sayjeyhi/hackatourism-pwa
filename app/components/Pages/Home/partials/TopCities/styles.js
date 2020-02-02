import Styled from 'styled-components';

export const StyledCitiesHolder = Styled.div`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px
`;

export const StyledTopCity = Styled.a`
  flex: 0 0 calc(33.33333% - 20px);
  margin: 16px 0;
  position: relative;
  color: #666;
  transition: transform ease-in-out 0.3s;
  border-radius: 4px;
  text-align: justify;
  
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    max-width: 100%;
    height: auto;
    -webkit-filter: grayscale(70%); /* Safari 6.0 - 9.0 */
    filter: grayscale(70%);
    transition: all ease-in-out 0.3s;
    min-height: 127px;
    max-height: 135px;
    min-width: 100%;
  }
  &:hover {
    transform: scale(1.05);
    img {
      -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
      filter: grayscale(0);
    }
    .current-weather {
      opacity: 1;
      transform: scale(1) translate(-50%, 0);
    }
    .city-name:before{
      display: block;
    }
  }
  .city-name {
    transition: padding ease-in-out 0.3s;
    font-size: 16px;
    margin: 10px 0;
    position: relative;
  }
  .city-name:before{
    display: none;
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    height: 13px;
    left: 0.15em;
    position: absolute;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 13px;
    left: 10px;
    transform: rotate(-135deg);
    border-color: #c1d481;
  }
  .city-description {
    transition: padding ease-in-out 0.3s;
    color: #999;
  }
  
  .city-name, 
  .city-description{
    padding: 0 5px;
  }
  .current-weather {
    position: absolute;
    left: 50%;
    top: 115px;
    transform: scale(0.6) translate(-50%,0);
    opacity: 0;
    transition: all ease-in-out 0.3s;
    background: #2d2d2d;
    padding: 0;
    height: auto;
    width: 32%;
    border-radius: 24px;
    box-shadow: -2px -6px 20px -3px rgba(0, 0, 0, 0.27), 0 7px 10px -4px rgba(0,172,193,.4);
    .weather-icon {
      background: #efefef;
      border-radius: 50%;
      width: 29px;
      height: 29px;
      display: inline-flex;
      transform: scale(1.2);
    }
    .weather-metric {
      font-size: 13px;
      position: relative;
      top: 7px;
      left: 10px;
      color: #d2bcfb;
      text-align: left;
      display: inline-flex;
      float: left;

      &:before {
        content: 'C°';
        font-size: 9px;
        position: absolute;
        color: #ccc;
        right: -16px;
        white-space: nowrap;
      }
    } 
  }
`;
