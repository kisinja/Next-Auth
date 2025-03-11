import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center flex-col gap-10">
            <h1 className="font-bold text-4xl mt-20">Sign Up Page</h1>
            <SignUp />
        </div>
    );
};