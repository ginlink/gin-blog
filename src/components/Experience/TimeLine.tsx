import React from 'react'
import styled, { css } from 'styled-components'
import { RowBetween } from '../Row'

enum NodeDirection {
  UP,
  DOWN,
}

const Wrapper = styled.div``

function Line() {
  return (
    <svg height="5" width="200">
      <line x1="0" y1="0" x2="200" y2="0" style={{ stroke: '#004165', strokeWidth: 5 }} />
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}

const EventBubbleWrapper = styled.div<{ direction: NodeDirection }>`
  .event1Bubble {
    position: absolute;
    background-color: rgba(158, 158, 158, 0.1);
    width: 139px;
    height: 60px;
    top: ${({ direction }) => (direction == NodeDirection.UP ? '-70px' : '33px')};
    left: ${({ direction }) => (direction == NodeDirection.UP ? '-15px' : '-105px')};
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(158, 158, 158, 0.64);

    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      border-bottom: 0;
    }

    ${({ direction }) =>
      direction == NodeDirection.UP
        ? css`
            &:before {
              bottom: -10px;
              left: 13px;
              border-top-color: rgba(222, 222, 222, 0.66);
              border-width: 12px;
            }

            &:after {
              bottom: -8px;
              left: 13px;
              border-top-color: #f6f6f6;
              border-width: 12px;
            }
          `
        : css`
            &:before {
              bottom: 59px;
              left: 103px;
              border-top-color: rgba(222, 222, 222, 0.66);
              border-width: 12px;
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              transform: rotate(180deg);
            }

            &:after {
              bottom: 57px;
              left: 103px;
              border-top-color: #f6f6f6;
              border-width: 12px;
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              transform: rotate(180deg);
            }
          `}
  }

  .eventTime {
    display: flex;
  }

  .DayDigit {
    font-size: 27px;
    font-family: 'Arial Black', Gadget, sans-serif;
    margin-left: 10px;
    color: #4c4a4a;
  }

  .Day {
    font-size: 11px;
    margin-left: 5px;
    font-weight: bold;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: #4c4a4a;
  }

  .MonthYear {
    font-weight: 600;
    line-height: 10px;
    color: #9e9e9e;
    font-size: 9px;
  }

  .eventTitle {
    font-family: 'Arial Black', Gadget, sans-serif;
    color: #a71930;
    font-size: 11px;
    text-transform: uppercase;
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 12px;
    margin-top: -2px;
  }
`

function EventBubble({ direction = NodeDirection.UP }: { direction?: NodeDirection }) {
  return (
    <EventBubbleWrapper direction={direction}>
      <div className="event1Bubble">
        <div className="eventTime">
          <div className="DayDigit">02</div>
          <div className="Day">
            Wednesday
            <div className="MonthYear">february 2016</div>
          </div>
        </div>
        <div className="eventTitle">Profile Created</div>
      </div>
    </EventBubbleWrapper>
  )
}

const NodeWrapper = styled.div<{ direction: NodeDirection }>`
  position: relative;

  ${({ direction }) =>
    direction == NodeDirection.UP
      ? css`
          .time {
            position: absolute;
            font-family: Arial, Helvetica, sans-serif;
            width: 50px;
            font-size: 8px;
            margin-top: -3px;
            margin-left: -5px;
            color: #9e9e9e;
          }
        `
      : css`
          .time {
            position: absolute;
            font-family: Arial, Helvetica, sans-serif;
            width: 50px;
            font-size: 8px;
            margin-top: -36px;
            margin-left: -5px;
            color: #9e9e9e;
          }
        `}
`

function Node({ direction = NodeDirection.UP }: { direction?: NodeDirection }) {
  return (
    <NodeWrapper direction={direction}>
      <EventBubble direction={direction} />
      <svg height="20" width="20">
        <circle cx="10" cy="11" r="5" fill="#004165" />
      </svg>
      <div className="time">9 : 27 AM</div>
    </NodeWrapper>
  )
}

const NowWrapper = styled.div`
  .now {
    background-color: #004165;
    color: white;
    border-radius: 7px;
    margin: 5px;
    padding: 4px;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid white;
    font-weight: bold;
    box-shadow: 0 0 0 2px #004165;
  }
`
function Now() {
  return (
    <NowWrapper>
      <div className="now">NOW</div>
    </NowWrapper>
  )
}

export default function TimeLine() {
  return (
    <Wrapper>
      <RowBetween style={{ justifyContent: 'flex-start', paddingTop: '70px' }}>
        <Line />
        <Node />

        <Line />
        <Node direction={NodeDirection.DOWN} />

        <Line />
        <Now />
      </RowBetween>
    </Wrapper>
  )
}
