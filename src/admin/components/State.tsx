
export default function State({
    title,
    numbers,
    description,
    className="bg-white"
}: {
    title: string
    numbers: number
    description: string
    className?: string
}) {
  return (
    <div className={`w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex 
    ${className}
    `}>
        <h4 className="text-gray-50 text-2xl font-bold font-manrope leading-9">{numbers} {title}
        </h4>
        <p className="text-gray-50 text-base font-normal leading-relaxed">{description}</p>
    </div>
  )
}
