import { size } from 'lodash';
import { matchPath, PathMatch } from 'react-router-dom';

import { RoutePath, RoutePathDefinition } from '../routes';

/**
 * Join paths with / and replace // with /
 * @param paths the paths to join
 * @returns string
 */
export const joinPaths = (paths: string[]) =>
  paths.join('/').replace(/\/\/+/g, '/');

/**
 * Exteact route params
 * @param routeMatch the route match
 * @returns string |null
 */
export const extractRouteParam = (routeMatch: PathMatch<string>) => {
  const matches = [...routeMatch.pathname.matchAll(/(?=)\/(\w*)$/gm)];
  if (matches) {
    return matches[0][1];
  }
  return undefined;
};

/**
 * Generate param path title
 * @param definition the route definition
 * @param match the match
 * @see {@link RoutePathDefinition}
 * @returns string
 */
export const generateParamPathTitle = (
  definition: RoutePathDefinition,
  match: PathMatch<string>,
) => {
  const param = extractRouteParam(match);
  return `${definition.title}-${param || ''}`;
};

/**
 * If the path active
 * @param match the match
 * @param currPath the path to check if active
 * @returns boolean
 */
export const isPathActive = (match: PathMatch<string>, currPath: string) =>
  match.pathname === currPath;

/**
 * Match the route definitions
 * @param definitions the route definition
 * @param pathname the pathname
 * @param parentPath the parent path
 * @see {@link RoutePathDefinition}
 * @returns
 */
export const matchRouteDefinitions = (
  definitions: RoutePathDefinition[],
  pathname: string,
  parentPath: string = '',
) => {
  const crumbs: RoutePath[] = [];
  definitions.forEach((definition) => {
    const pathPatternWithParent = joinPaths([parentPath, definition.path]);
    const match = matchPath(
      { path: pathPatternWithParent, end: false },
      pathname,
    );

    if (match && !['/', '*'].includes(definition.path)) {
      if (definition.title) {
        const isParamRoute = size(match.params) > 0;
        crumbs.push({
          title: isParamRoute
            ? generateParamPathTitle(definition, match)
            : definition.title,
          active: isPathActive(match, pathname),
          isParamRoute,
          match,
        });
      }
      if (definition.children) {
        const nestedMatches = matchRouteDefinitions(
          definition.children,
          pathname,
          pathPatternWithParent,
        );

        crumbs.push(...nestedMatches);
      }
    }
  });
  return crumbs;
};
