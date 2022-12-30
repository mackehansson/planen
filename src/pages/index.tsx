import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    faGoogle,
    faGithub,
    faApple,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { trpc } from "../utils/trpc";
import { Logo } from "../components/logo/Logo";
import { TextField } from "../components/text-field/TextField";
import { Checkbox } from "../components/checkbox/Checkbox";
import { Button } from "../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "../components/icon-button/IconButton";

const Home: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

    return (
        <>
            <Head>
                <title>Planen</title>
                <meta
                    name="description"
                    content="With Planen, family time just got a whole lot easier"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex h-full w-full items-center justify-center">
                <div className="w-full max-w-[600px] p-10 text-center">
                    <div className="mb-2">
                        <Logo />
                    </div>
                    <div className="mb-16">
                        With Planen, family time just
                        <br /> got a whole lot easier.
                    </div>
                    <div className="mb-10 text-left">
                        <TextField
                            label="Username"
                            type="text"
                            className="mb-4"
                        />
                        <TextField
                            label="Password"
                            type="password"
                            className="mb-4"
                        />
                        <Checkbox className="mb-4">Remember me</Checkbox>
                        <Login />
                    </div>
                    <div className="mb-16">
                        <div className="mb-6">or sign up via</div>
                        <div className="mb-6 flex items-center justify-center gap-10">
                            <IconButton>
                                <FontAwesomeIcon icon={faEnvelope} size="1x" />
                            </IconButton>
                            <IconButton>
                                <FontAwesomeIcon icon={faGoogle} />
                            </IconButton>
                            <IconButton>
                                <FontAwesomeIcon icon={faGithub} />
                            </IconButton>
                        </div>
                        <div className="mb-6 flex items-center justify-center gap-10">
                            <IconButton>
                                <FontAwesomeIcon icon={faApple} />
                            </IconButton>
                            <IconButton>
                                <FontAwesomeIcon icon={faFacebook} />
                            </IconButton>
                            <IconButton>
                                <FontAwesomeIcon icon={faTwitter} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
            {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Create{" "}
                        <span className="text-[hsl(280,100%,70%)]">T3</span> App
                    </h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                        <Link
                            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                            href="https://create.t3.gg/en/usage/first-steps"
                            target="_blank"
                        >
                            <h3 className="text-2xl font-bold">
                                First Steps →
                            </h3>
                            <div className="text-lg">
                                Just the basics - Everything you need to know to
                                set up your database and authentication.
                            </div>
                        </Link>
                        <Link
                            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                            href="https://create.t3.gg/en/introduction"
                            target="_blank"
                        >
                            <h3 className="text-2xl font-bold">
                                Documentation →
                            </h3>
                            <div className="text-lg">
                                Learn more about Create T3 App, the libraries it
                                uses, and how to deploy it.
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-2xl text-white">
                            {hello.data
                                ? hello.data.greeting
                                : "Loading tRPC query..."}
                        </p>
                        <AuthShowcase />
                    </div>
                </div>
            </main> */}
        </>
    );
};

export default Home;

const Login: React.FC = () => {
    const { data: sessionData } = useSession();
    const router = useRouter();

    const handleLogin = async () => {
        await signIn();
        router.push("/dashboard");
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <Button
            className="w-full"
            size="large"
            startIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
            onClick={sessionData ? () => handleLogin() : () => handleSignOut()}
        >
            {sessionData ? "Sign out" : "Sign in"}
        </Button>
    );
};

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined }
    );

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
                {sessionData && (
                    <span>Logged in as {sessionData.user?.name}</span>
                )}
                {secretMessage && <span> - {secretMessage}</span>}
            </p>
            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={sessionData ? () => signOut() : () => signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};
