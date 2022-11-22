export interface ILocationListProps {
    setLocationInput: React.Dispatch<React.SetStateAction<string>>;
    locations: Array<string>;
    children?: React.ReactNode;
}