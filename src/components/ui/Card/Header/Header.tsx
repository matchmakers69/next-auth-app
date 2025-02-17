interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-2">
      <p className="mb-6 text-md">{label}</p>
    </div>
  );
};

export default Header;
