import './loader.css';

const Loader = ({ size }) => {
    console.log(size)
    return (
        <div className={`p-0 m-0  text-${size} loader`}>
            🚗
        </div>
    );
};

export default Loader;