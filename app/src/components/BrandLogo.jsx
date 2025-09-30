export default function BrandLogo({ name, alt, size="h-10 w-10", rounded=true }) {
  return (
    <>
      <img src={`/images/company_icons/${name}-dark.webp`} alt={alt} className={`${size} ${rounded ? "rounded" : ""} block dark:hidden transition-all duration-300`} />
      <img src={`/images/company_icons/${name}-light.webp`} alt={alt} className={`${size} ${rounded ? "rounded" : ""} hidden dark:block transition-all duration-300`} />
    </>
  );
}