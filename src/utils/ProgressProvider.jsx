import { useState, useEffect } from "react";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

export default ProgressProvider;
