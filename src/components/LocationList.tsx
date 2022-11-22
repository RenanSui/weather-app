import { ILocationListProps } from "../interfaces/LocationList";

export const LocationList = ({
    locations,
    setLocationInput,
}: ILocationListProps) => {
    return (
        <ul className="border-b border-[#ccc] text-xs transition-all sm:text-base">
            {locations.map((location) => {
                const id = Math.floor(Math.random() * Date.now());
                return (
                    <li
                        className="mb-8 cursor-pointer font-normal tracking-wide"
                        onClick={(e) =>
                            setLocationInput(e.currentTarget.innerText)
                        }
                        key={id}
                    >
                        {location}
                    </li>
                );
            })}
        </ul>
    );
};
