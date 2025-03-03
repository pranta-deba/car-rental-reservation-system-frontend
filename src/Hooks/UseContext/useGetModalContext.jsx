import { useContext } from "react";
import { ModalContext } from "../../Providers/ModalProvider";

const useGetModalContext = () => {
    const all = useContext(ModalContext);
    return all
};

export default useGetModalContext;