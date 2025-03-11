import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center flex-col gap-10">
            <h1 className="font-bold text-4xl mt-20">Sign In Page</h1>
            <SignIn />
        </div>
    );
}