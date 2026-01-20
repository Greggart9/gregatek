import Link from "next/link";

type TbuttonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const TransparentButton = ({
  label,
  href,
  onClick,
  className = "",
}: TbuttonProps) => {
  const styles = `
    inline-flex items-center justify-center
    px-4 py-2
    rounded-lg
    text-xs
   sm:text-sm font-semibold
    bg-black/20 text-white

    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {label}
    </button>
  );
};

export default TransparentButton;
