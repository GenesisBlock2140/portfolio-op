const ToolsItem = ({title, desc, svg}) => {
  return (
    <div className="w-full] h-[80px] my-4">
      <div className="flex gap-3 rounded-lg p-3 bg-white">
        <div>
          <div className="w-[46px] h-[46px] flex items-center justify-center rounded-md">
            <img src={svg} alt={title} />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="font-semibold text-lg my-0">{title}</p>
            <p className="text-gray-600 my-0 hidden md:block">{desc}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default ToolsItem;