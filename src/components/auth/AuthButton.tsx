import { Provider } from "next-auth/providers";
import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";
import Logout from "./Logout";

export default function({ providers }: { providers: Provider}) {
    const { data } = useSession();

    if (data) {
        return <Logout/>
    }
    return (
        <LoginForm providers={providers}/>
    )
}