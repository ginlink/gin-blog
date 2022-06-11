import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
`

export const AutoColumn = styled.div<{
  gap?: 'sm' | 'md' | 'lg' | string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
}>`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  /* grid-auto-rows: auto; */

  grid-template-columns: repeat(auto-fill, 100%);
  grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};

  justify-items: ${({ justify }) => justify && justify};

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-left: 10px;
  }
  .loading {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    padding: 3px;
  }
  .loading .loading-content {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: relative;
    z-index: 9;
    border-radius: 50%;
  }
  .loading .loading-border {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border: 10px solid #f0f1f6;
    border-radius: 50%;
  }
  .loading .loading-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    animation: rotateAnimate 2s linear infinite;
    -moz-animation: rotateAnimate 2s linear infinite; /* Firefox */
    -webkit-animation: rotateAnimate 2s linear infinite; /* Safari 和 Chrome */
    -o-animation: rotateAnimate 2s linear infinite; /* Opera */
  }
  .loading .loading-mask::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: calc(50% - 5px);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e7e6ff;
  }
  .loading .loading-mask::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    height: 60%;
    background-image: linear-gradient(45deg, #7a3cef, #f0f1f6);
  }
  @keyframes rotateAnimate {
    from {
      transform: rotate(0);
      -moz-transform: rotate(0);
      -webkit-transform: rotate(0);
      -o-transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotateAnimate /* Firefox */ {
    from {
      transform: rotate(0);
      -moz-transform: rotate(0);
      -webkit-transform: rotate(0);
      -o-transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotateAnimate /* Safari 和 Chrome */ {
    from {
      transform: rotate(0);
      -moz-transform: rotate(0);
      -webkit-transform: rotate(0);
      -o-transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }

  @-o-keyframes rotateAnimate /* Opera */ {
    from {
      transform: rotate(0);
      -moz-transform: rotate(0);
      -webkit-transform: rotate(0);
      -o-transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }
`

export default Column
