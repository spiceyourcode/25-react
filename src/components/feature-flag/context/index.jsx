import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            // original service call 
            const response = await featureFlagsDataServiceCall();
            setEnabledFlags(response)
        }
        catch (error) {
            console.log(error);
            throw new Error(error)
        }
    }
    useEffect(() => {
        fetchFeatureFlags();
    }, []);
    return (
        <FeatureFlagsContext.Provider value={{ enabledFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}