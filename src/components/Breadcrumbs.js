import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const path = usePathname();

  let currentLink = '';
  let breadcrumbs = [];

  if (path !== '/') {
    breadcrumbs.push(
      <div className="flex items-center" key="home">
        <Link
          href="/"
          className="text-white text-sm md:text-lg xl:text-xl font-semibold"
        >
          Home
        </Link>
        <span className="mx-2">{'>'}</span>
      </div>
    );
  }

  breadcrumbs = breadcrumbs.concat(
    path
      .split('/')
      .filter(crumb => crumb !== '')
      .map((crumb, index, array) => {
        currentLink += `/${crumb}`;

        const isLastCrumb = index === array.length - 1;

        if (isLastCrumb) {
          crumb = crumb.replaceAll("%20", " ")
        }

        if (crumb == "wiki") {
          crumb = crumb.replace("w", "W")
        }

        return (
          <div
            className="flex text-sm md:text-lg xl:text-xl items-center"
            key={crumb}
          >
            <Link href={currentLink} className="text-white font-semibold">
              {crumb}
            </Link>
            {!isLastCrumb && <span className="mx-2">{'>'}</span>}
          </div>
        );
      })
  );

  return (
    <div className="flex items-center space-x-2 text-white">{breadcrumbs}</div>
  );
}
