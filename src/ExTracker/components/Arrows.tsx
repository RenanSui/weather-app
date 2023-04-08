import React from 'react';

// ! usage:
// ? <ArrowDown />
// ? <ArrowLeft />
// ? <CircleArrowUp green={false}  />
// ? <CircleArrowRight green={false} />

const baseArrow =
    'relative inline-block cursor-pointer h-8 w-8 rounded-[50%] bg-none after:absolute after:block after:h-[0.625rem] after:w-[0.625rem] after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:border-l-2 after:border-white after:text-custom-white-500 after:hover:text-custom-white-400';

export const ArrowUp = () => (
    <span
        className={`${baseArrow} after:left-1/2 after:top-[55%] after:rotate-[135deg] `}
    />
);

export const ArrowRight = () => (
    <span
        className={`${baseArrow} after:left-[40%] after:top-[50%] after:rotate-[225deg]`}
    />
);
export const ArrowDown = () => (
    <span
        className={`${baseArrow} after:left-1/2 after:top-[40%] after:-rotate-45`}
    />
);

export const ArrowLeft = () => (
    <span
        className={`${baseArrow} after:left-[60%] after:top-[50%] after:rotate-45`}
    />
);
/*
.
.
.
.
.
*/
const baseCircleArrow =
    'relative block cursor-pointer h-8 w-8 rounded-[50%] bg-none before:absolute before:top-1/2 before:left-[50%] before:block before:h-[13px] before:w-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:border-r-2 after:absolute after:block after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:border-l-2';

const circleArrowColor = (color: boolean) =>
    color
        ? 'before:border-custom-green-500 after:border-custom-green-500 bg-custom-green-900'
        : 'before:border-custom-red-500 after:border-custom-red-500 bg-custom-red-900';

export const CircleArrowUp = ({ green }: { green: boolean }) => (
    <span
        className={`after:left-1/2 after:top-[47%] after:rotate-[135deg] 
        ${baseCircleArrow + ' ' + circleArrowColor(green)}`}
    />
);
export const CircleArrowRight = ({ green }: { green: boolean }) => (
    <span
        className={`before:rotate-90 after:left-[55%] after:top-[50%] after:rotate-[225deg]
        ${baseCircleArrow + ' ' + circleArrowColor(green)}`}
    />
);
export const CircleArrowDown = ({ green }: { green: boolean }) => (
    <span
        className={`after:left-1/2 after:top-[53%] after:-rotate-45 
        ${baseCircleArrow + ' ' + circleArrowColor(green)}`}
    />
);
export const CircleArrowLeft = ({ green }: { green: boolean }) => (
    <span
        className={`before:rotate-90 after:left-[45%] after:top-[50%] after:rotate-45
        ${baseCircleArrow + ' ' + circleArrowColor(green)}`}
    />
);
