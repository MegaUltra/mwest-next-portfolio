const ProjectList = () => {

const title: string = "A Project by Mikel-Jon West";
const description: string = "Description of the project";

    return (
        <div>
            <div className="font-bold">{title}</div>
            <div>{description}</div>
        </div>
    );
};

export default ProjectList;