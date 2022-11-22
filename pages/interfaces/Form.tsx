export interface IFormProps {
    inputValueRef: React.RefObject<HTMLInputElement>;
    setLocationInput: React.Dispatch<React.SetStateAction<string>>;
    formButtonColor: string;
    children?: React.ReactNode;
}