import { useRouter } from 'next/router';

export const useCrumbs = () => {
  const router = useRouter();
  const crumbsRaw = router.asPath.split('/');
  crumbsRaw.shift();
  const crumbs = crumbsRaw.filter(c => c !== '' && !c.includes('?'));

  let crumbPaths: string[] = [];
  let path = '/';

  crumbs.forEach(crumb => {
    path += `${crumb}/`;
    crumbPaths.push(path);
  });

  return { crumbs, crumbPaths };
};
