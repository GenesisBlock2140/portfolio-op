const Container = ({className, children}) => {
  return (
    <div className={className}>
      <div className="max-w-[1000px] mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Container;