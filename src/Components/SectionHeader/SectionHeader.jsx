
const SectionHeader = ({ title = 'Title', children = 'Sub Title', titleSplit = false }) => {
    return (
        <div className="container mx-auto text-center my-4 md:my-6 lg:my-10 space-y-3 px-3">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow">{
                titleSplit ?
                    <>
                        <span>{title.split(' ')[0]} </span>
                        <span className="primary-text">{title.split(' ')[1]}</span>
                    </> : <span>{title}</span>
            }</h1>
            <p className="md:w-2/3 mx-auto text-gray-500">{children}</p>
        </div>
    );
};

export default SectionHeader;