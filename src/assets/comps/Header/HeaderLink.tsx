export default function HeaderLink(props: { content: string }) {
  const content = props.content;

  return (
    <div className="block py-2 px-3 text-white md:p-0 duration-300 sm:text-5xl lg:text-xs">
      {content}
    </div>
  );
}
