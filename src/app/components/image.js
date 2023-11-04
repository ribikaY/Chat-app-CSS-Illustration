import Image from "next/image";

const Img = ({img, width, height, alt ,classname}) => {
    return(
        <Image
           src={img}
           width={width ? width : "auto"}
           height={height ? height : "auto"}
           alt={alt ? alt : "image"}
           className={`image ${classname}`}
        />
    )
}

export default Img;