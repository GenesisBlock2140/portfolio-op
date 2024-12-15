const ProjectItem = ({ title, desc, imgUrl, imgAlt, website, sourceCode }) => {
  return (
    <div className="w-full md:flex gap-10 py-10">
      <div className="md:w-1/2">
        <img src={imgUrl} alt={imgAlt} className="border-2 border-slate-200" />
      </div>
      <div className="flex flex-col items-start gap-4 md:w-1/2 my-auto">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="flex gap-4">
          <a href={website} target="_blank" className="text-lg text-white font-bold px-4 py-2 bg-[color:--primary] rounded-lg">
            Voir le projet
          </a>
          <a href={sourceCode} target="_blank" className="text-lg text-white font-bold px-4 py-2 bg-[color:--primary] rounded-lg">
            Code source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
