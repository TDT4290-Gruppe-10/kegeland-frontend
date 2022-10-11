export type menuItemsType = { [index: string]: string }

export const getTextFromkey = (menuItems: menuItemsType, key: string) => {
    if (menuItems.hasOwnProperty(key)) {
        return menuItems[key];
    }

    return Object.values(menuItems)[0]
}
