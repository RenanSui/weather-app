import { CircleArrowDown, CircleArrowUp } from './Arrows';

const Totals = () => {
    return (
        <section
            className="flex flex-grow flex-row flex-wrap justify-center font-Inter text-custom-white-500"
            aria-labelledby="totals-title"
        >
            <h1 className="hidden" id="totals-title">
                Totals
            </h1>
            <section
                className="m-4 mb-4 flex w-full flex-grow cursor-pointer flex-col items-center justify-center rounded bg-custom-dark-800 p-8 hover:bg-custom-dark-700"
                aria-labelledby="total-balance-title"
            >
                <h1
                    className="text-[0.625rem] font-semibold leading-8 tracking-[0.071875rem] text-custom-white-400"
                    id="total-balance-title"
                >
                    TOTAL BALANCE
                </h1>
                <p className="mr-[72px] text-xl font-medium">$0</p>
            </section>
            <section
                className="relative mx-4 mr-4 flex w-2/5 flex-grow cursor-pointer flex-col items-start justify-end rounded bg-custom-dark-800 px-5 pb-6 pt-10 hover:bg-custom-dark-700"
                aria-labelledby="total-income-title"
            >
                <h1
                    className="text-[10px] font-semibold leading-8 tracking-[0.071875rem] text-custom-white-400"
                    id="total-income-title"
                >
                    TOTAL INCOME
                </h1>
                <p className="mr-20 text-xl font-medium tracking-[0.071875rem]">
                    +$0
                </p>
                <span className="absolute right-3 top-3">
                    <CircleArrowDown green={true} />
                </span>
            </section>
            <section
                className="relative mr-4 flex w-2/5 flex-grow cursor-pointer flex-col items-start justify-end rounded bg-custom-dark-800 px-5 pb-6 pt-10 hover:bg-custom-dark-700"
                aria-labelledby="total-expense-title"
            >
                <h1
                    className="text-[10px] font-semibold leading-8 tracking-[0.071875rem] text-custom-white-400"
                    id="total-expense-title"
                >
                    TOTAL EXPENSE
                </h1>
                <p className="mr-20 text-xl font-medium tracking-[0.071875rem]">
                    -$0
                </p>
                <span className="absolute right-3 top-3">
                    <CircleArrowUp green={false} />
                </span>
            </section>
        </section>
    );
};

export default Totals;
