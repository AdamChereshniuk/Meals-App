export const YouTubeButton = ({ href, text }: { href: string, text: string }) => {
  return (
    <a
      className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
      href={href}
      target="_blank"
    >
      {text}
    </a>
  );
};