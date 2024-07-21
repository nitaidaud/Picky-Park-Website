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
      className="border-2 p-2 rounded-2xl border-transparent hover:border-white duration-300 hover:bg-opacity-40 hover:border-opacity-30"
      aria-current="page"
    >
      <div className="block py-2 px-3 text-white md:p-0 duration-300 ">
        {content}
      </div>
    </a>
  );
}
