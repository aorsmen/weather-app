
interface Img {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    title?: string;
    style?: React.CSSProperties;
};

const Image: React.FC<Img> = ({ src, alt, width, height, title, style }) => {
    return (
        <figure style={style}>
            <img src={src} alt={alt} width={width} height={height} title={title} />
        </figure>
    );
};

export default Image;