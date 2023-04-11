import { ReactNode } from "react";

interface GlobalLayoutProps {
    children: ReactNode
};

const GlobalLayout = ({ children, ...props }: GlobalLayoutProps) => {

    return (
        <>
            <main {...props}>
                {children}
            </main>
        </>

    )
};

export default GlobalLayout;