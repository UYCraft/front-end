import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import BannerSlider from "../components/BannerSlider";

const Dashboard = () => {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        // Ambil data user yang tadi disimpan saat Login
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="mt-15 mx-auto max-w-7xl">
            <div className="rounded-lg">
                <BannerSlider />
            </div>
        </div>
    );
};

export default Dashboard;