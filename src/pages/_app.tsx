import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Fira_Sans } from "@next/font/google";
import { SSRProvider } from "react-aria";
import { trpc } from "../utils/trpc";

import "../styles/globals.scss";

const firaSans = Fira_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
});

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SSRProvider>
            <SessionProvider session={session}>
                <style jsx global>{`
                    body {
                        font-family: ${firaSans.style.fontFamily};
                    }
                `}</style>
                <Component {...pageProps} />
            </SessionProvider>
        </SSRProvider>
    );
};

export default trpc.withTRPC(MyApp);
