export default function Title({title} : {title:string}){
    return(
        <div className="flex justify-center  fixed inset-1/4">
            <h1 className="text-mainBlue text-2xl font-semibold">{title}</h1>
        </div>
    )
}