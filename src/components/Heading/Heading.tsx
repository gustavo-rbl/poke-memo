type HeadingProps = {
  text: string;
};

function Heading({ text }: HeadingProps) {
  return <h3 className="fade--in">{text}</h3>;
}

export default Heading;
