import google from "../assets/google_logo.svg";
import apple from "../assets/apple-logo.svg";
import facebook from "../assets/facebook-logo.svg";
export default function ThirdParty() {
    return (
        <>
            <div className="flex items-center">
                <p className="text-heading1 font-Bold text-xl">/</p>
            </div>
            <div className="flex flex-col gap-7 justify-center">
                <div>
                    <button
                        className="inline-flex items-center gap-2 justify-center w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold text-[#B8B8B8]"
                        type="button"
                    >
                        <img
                            src={google}
                            className="w-[2.5rem] h-[2.5rem]"
                            alt="google"
                        ></img>
                        Sign in with Google
                    </button>
                </div>
                <div>
                    <button
                        className="inline-flex items-center gap-2 justify-center w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold text-[#B8B8B8]"
                        type="button"
                    >
                        <img
                            src={apple}
                            className="w-[2.5rem] h-[2.5rem]"
                            alt="google"
                        ></img>
                        Sign in with Apple
                    </button>
                </div>
                <div>
                    <button
                        className="inline-flex items-center gap-2 justify-center w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold text-[#B8B8B8] "
                        type="button"
                    >
                        <img
                            src={facebook}
                            className="w-[2.5rem] h-[2.5rem]"
                            alt="google"
                        ></img>
                        Sign in with Facebook
                    </button>
                </div>
            </div>
        </>
    )
}