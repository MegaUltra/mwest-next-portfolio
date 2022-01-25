import DemoReel from "./demo_reel";
import Image from "next/image";
import { ReactNode } from "react";

export interface HeaderInterface {
    title?: string;
    tagline?: string;
    image: string;
    imageAlt?: string;
    children?: ReactNode;
}

const Header = (props:HeaderInterface) => {
    return (
        <div className="text-center" >
            <h1 className="text-2xl sm:text-4xl font-bold">{props.title}</h1>
    <h2 className="text-gray-500 font-semibold mt-2">{props.tagline}</h2>
    
    <div className="relative h-8 sm:h-16 m-6">
    <Image src={props.image} layout="fill" alt={props.imageAlt} />
    </div>
    {props.children}
        </div>
    );
};

export default Header;