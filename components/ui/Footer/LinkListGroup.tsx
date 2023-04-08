import LinkListItem from './LinkListItem';

const LinkListGroup = ({
  title,
  classes,
  children,
}: {
  title: string;
  classes?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${classes} pr-12 lg:pr-0`}>
      <h3 className="font-semibold text-neutral-light mb-4">{title}</h3>
      <ul className="flex flex-col space-y-2 text-sm">{children}</ul>
    </div>
  );
};

export default LinkListGroup;
