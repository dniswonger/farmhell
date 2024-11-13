import { PropsWithChildren, useState } from "react";
import Header from "../header/Header";
import Drawer from "../drawer/Drawer";
import { SessionProvider } from "next-auth/react";
export default function Layout({ children }: PropsWithChildren) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <SessionProvider>
        <div className="h-full flex flex-col">
            <Header onMenuClick={() => { setIsDrawerOpen(!isDrawerOpen) }}>Go To Heliconia</Header>
            <div className="flex-grow relative">
                <Drawer isOpen={isDrawerOpen} position="left" />
                {children}
            </div>
        </div>
        </SessionProvider>
    )
}