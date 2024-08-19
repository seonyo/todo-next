import Title from "@/components/title";

export default function Home() {
    return (
        <div className="flex justify-center">
            <Title title="What are you going to do?" />
            <input type="text"
                className="w-2/5 h-16 rounded-full border border-mainBlue fixed mt-80 z-10 pl-6 focus:outline-none text-neutral-700">
            </input>
            <button type="submit"
                className="w-32 h-10 rounded-full font-light bg-mainBlue absolute text-white mt-[420px]"
            >Submit</button>
        </div>
    )
}