import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    rightIcon?: string;
    textStyle?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufactureProps {
    manufacture: string;
    setManufacture: (manufacture: string) => void;
}

export interface CarsProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders:4,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number,
}