import './loader.css';

const Loader = ({ size }) => {
    return (
        <div className={`p-0 m-0  text-${size} loader`}>
            🚗
        </div>
    );
};

export default Loader;