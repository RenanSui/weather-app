import React, { Dispatch, SetStateAction } from 'react';

const History = ({
    formState,
    setFormState,
}: {
    formState: Boolean;
    setFormState: Dispatch<SetStateAction<boolean>>;
}) => {
    const transactions = [
        {
            id: 1,
            title: 'Company paid me',
            amount: '7000',
            tag: 'Saving & Debts',
            transactionType: 'Income',
            description: 'Salary',
            when: '01/17/2023',
            createdAt: 'Jan 24, 2023 9:27:41 AM',
        },
        {
            id: 2,
            title: 'RTX 3090',
            amount: '1499',
            tag: 'Personal Spending',
            transactionType: 'Expense',
            description: 'buying for me',
            when: '01/17/2023',
            createdAt: 'Jan 24, 2023 9:10:11 AM',
        },
    ];

    return (
        <section
            className="flex flex-row flex-wrap items-center font-Inter text-custom-white-500"
            aria-labelledby="history-title"
        >
            <h1
                className="my-6 ml-6 font-bold tracking-[0.071875rem] "
                id="history-title"
            >
                Recent Transaction
            </h1>

            <button
                className="relative ml-auto mr-6 h-14 w-14 cursor-pointer rounded-full bg-custom-blue-500 before:absolute before:top-1/2 before:left-1/2 before:h-[1.25rem] before:w-[0.125rem] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded before:bg-white before:transition-all before:duration-500 after:absolute after:top-1/2 after:left-1/2 after:h-[1.25rem] after:w-[0.125rem] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 hover:bg-custom-blue-400 hover:before:h-[1.75rem] hover:after:h-[1.75rem]"
                onClick={() => setFormState(!formState)}
            />

            {transactions.map((item) => (
                <>
                    {/* start of individual transaction */}
                    <article
                        className="mx-4 mt-1 mb-3 flex w-full cursor-pointer rounded bg-custom-dark-800 hover:bg-custom-dark-700"
                        aria-labelledby="article-title"
                    >
                        <h1 className="hidden" id="article-title">
                            {item.title}
                        </h1>
                        <span className="m-[0.75rem] flex min-h-[4.6875rem] min-w-[4.6875rem] items-center justify-center rounded bg-custom-dark-600">
                            +
                        </span>
                        <section
                            className="m-3 ml-0 flex flex-grow flex-row flex-wrap justify-between"
                            aria-labelledby="transaction-info"
                        >
                            <h1 className="hidden" id="transaction-info">
                                Transaction Info
                            </h1>
                            <p className="mr-2 min-h-fit w-3/5 flex-grow text-base font-medium tracking-[0.071875rem] text-custom-white-500">
                                {/* less than 32 characters */}
                                {item.title}
                            </p>
                            <p
                                className={`min-w-fit flex-grow text-end text-base font-medium tracking-[0.071875rem] 
                                ${
                                    item.transactionType === 'Expense'
                                        ? 'text-custom-red-500'
                                        : 'text-custom-green-500'
                                }`}
                            >
                                +${item.amount}
                            </p>
                            <p className="w-2/5 flex-grow place-self-end text-[0.75rem] font-normal tracking-[0.071875rem] text-custom-white-300">
                                {item.tag}
                            </p>
                            <p className=" flex-grow place-self-end text-end text-[0.625rem] font-normal tracking-[0.071875rem] text-custom-white-300">
                                Jan 17, 2023
                            </p>
                        </section>
                    </article>
                    {/* end of individual transaction */}
                </>
            ))}
        </section>
    );
};

export default History;
