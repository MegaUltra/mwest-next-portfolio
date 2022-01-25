import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewInterface {
    title: string;
    description: string;
    linkUrl: string;
    image: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {


    return (
        <Link href={props.linkUrl}>
             <a>   
        <div className="flex gap-4">
            <div className="relative w-24 h-14">
<Image src={props.image} layout="fill" objectFit="cover"/>
            </div>
            <div className="my-auto">
            <div className="font-bold hover:text-indigo-600">{props.title}</div>
            <div>{props.description}</div>
            </div>
        </div>
        </a>
        </Link>
    );
};

export default ProjectPreview;