import { useSession } from "next-auth/react";

export default function Account() {
    const { data: session } = useSession();

    return <div>{JSON.stringify(session)}</div>
}

Account.auth = {
    
}