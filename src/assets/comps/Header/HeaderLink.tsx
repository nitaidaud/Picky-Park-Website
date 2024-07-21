export default function HeaderLink(props: {
  content: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  const content = props.content;
  const href = props.href;
  const target = props.target;

  return (
    <a
      target={target}
      href={href}
      aria-current="page"
    >
      <div className="block py-2 px-3 text-white md:p-0 duration-300">
        {content}
      </div>
    </a>
  );
}
