import React from 'react';
import { ArrowLeft } from './Arrows';

const CreateForm = ({ formState }: { formState: Boolean }) => {
    return (
        <form
            className="text-white transition-all duration-1000 roll-out"
            aria-labelledby="form-title"
            key={'create-form'}
        >
            <header>
                <ArrowLeft />
                <h1 id="form-title">Add Transaction</h1>
            </header>
        </form>
    );
};

export default CreateForm;

// {formState ? (
//     <div className="text-white">form opened</div>
// ) : (
//     <div className="text-white">form closed</div>
// )}
