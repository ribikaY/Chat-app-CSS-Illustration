const Title = ({title, classname}) => {
    return(
        <h1 className={`title ${classname}`}>{title && title}</h1>
    )
}

export default Title;