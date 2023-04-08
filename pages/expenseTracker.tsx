// components
import React, { useState } from 'react';
import CreateForm from '../src/ExTracker/components/CreateForm';
import Header from '../src/ExTracker/components/Header';
import History from '../src/ExTracker/components/History';
import Totals from '../src/ExTracker/components/Totals';

const expenseTracker = () => {
    const [formState, setFormState] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [editFormState, setEditFormState] = useState(false);

    return (
        <>
            <Header />
            <main>
                <button
                    className="absolute top-0 left-0"
                    onClick={() => setFormState(!formState)}
                >
                    <span className="relative ml-auto mr-6 block h-14 w-14 cursor-pointer rounded-full bg-custom-blue-500 before:absolute before:top-1/2 before:left-1/2 before:h-[1.25rem] before:w-[0.125rem] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded before:bg-white before:transition-all before:duration-500 after:absolute after:top-1/2 after:left-1/2 after:h-[1.25rem] after:w-[0.125rem] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:rounded after:bg-white after:transition-all after:duration-500 hover:bg-custom-blue-400 hover:before:h-[1.75rem] hover:after:h-[1.75rem]" />
                </button>
                {formState ? (
                    <>
                        <div className="text-white">true</div>
                        <CreateForm formState={formState} />
                    </>
                ) : (
                    <>
                        <div className="text-white">false</div>
                    </>
                )}

                <Totals />
                <History formState={formState} setFormState={setFormState} />
            </main>
            <footer>
                <h1 className="hidden">This is the end</h1>
            </footer>
        </>
    );
};

export default expenseTracker;
