import Image from "next/image";
import projectCover from "../images/projects-cover.jpg";
import Link from "next/link";

const ProjectList = () => {

const title: string = "A Project by Mikel-Jon West";
const description: string = "Description of the project";
const linkUrl: string = "/test-project";

    return (
        <Link href={linkUrl}>
             <a>   
        <div className="flex gap-4">
            <div className="relative w-24 h-14">
<Image src={projectCover} layout="fill" objectFit="cover"/>
            </div>
            <div className="my-auto">
            <div className="font-bold hover:text-indigo-600">{title}</div>
            <div>{description}</div>
            </div>
        </div>
        </a>
        </Link>
    );
};

export default ProjectList;