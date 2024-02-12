import { useEffect, useState } from "react";

const useUserOffline=()=> {
    const [offlineStatus, setOfflineStatus]=useState(true);

    useEffect(()=> {
        window.addEventListener("offline", ()=> {
            setOfflineStatus(false);
        });
        window.addEventListener("online", ()=> {
            setOfflineStatus(true);
        });
    }, []);

    return offlineStatus;
}

export default useUserOffline;