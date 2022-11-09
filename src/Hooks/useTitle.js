import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tourist.Man`;
    }, [title])
};

export default useTitle;