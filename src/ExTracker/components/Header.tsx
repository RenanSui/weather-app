// components
import { ArrowLeft, ArrowDown } from './Arrows';

const Header = () => {
    return (
        <header
            className="flex w-full items-center justify-center bg-custom-dark-800 py-2 px-4"
            aria-labelledby="tracker-title"
        >
            <h1 className="hidden" id="tracker-title">
                Expense Tracker
            </h1>
            <h2 className="cursor-pointer items-center justify-center bg-custom-dark-800 py-6 font-Arial text-xl font-bold text-white">
                Overall
            </h2>
            <ArrowDown />
            {/* <ArrowLeft /> */}
        </header>
    );
};

export default Header;
