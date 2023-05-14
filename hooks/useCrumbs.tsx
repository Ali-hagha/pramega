import { useRouter } from 'next/router';

export const useCrumbs = () => {
  const router = useRouter();
  const crumbs = router.asPath.split('/');
  crumbs.shift();

  let crumbPaths: string[] = [];
  let path = '/';

  crumbs.forEach(crumb => {
    path += `${crumb}/`;
    crumbPaths.push(path);
  });

  return { crumbs, crumbPaths };
};
