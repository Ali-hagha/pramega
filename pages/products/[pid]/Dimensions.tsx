type Props = {
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
};
const Dimensions = ({ dimensions: { width, depth, height } }: Props) => {
  return (
    <div className="border-2 border-neutral-dark/10  self-start rounded mb-12 h-16 flex items-center justify-center">
      <DimensionItem title={'width'} dimension={width} />
      <Divider />
      <DimensionItem title={'depth'} dimension={depth} />
      <Divider />
      <DimensionItem title={'height'} dimension={height} />
    </div>
  );
};

const DimensionItem = ({
  title,
  dimension,
}: {
  title: string;
  dimension: number;
}) => {
  return (
    <div className="p-3 px-4">
      <p className="uppercase text-neutral-dark/50 text-xs font-bold">
        {title}
      </p>
      <p className="font-semibold">
        {dimension}
        <span className="text-xs text-neutral-dark/50 font-semibold">cm</span>
      </p>
    </div>
  );
};

const Divider = () => {
  return <div className="h-12 border-l-2"></div>;
};

export default Dimensions;
