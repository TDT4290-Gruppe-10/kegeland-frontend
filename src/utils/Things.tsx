export type menuItemsType = { [index: string]: string }

export const getTextFromkey = (menuItems: menuItemsType, key: string) => {
    let menuText = Object.values(menuItems)[0]
    if (menuItems.hasOwnProperty(key)) {
        return menuItems[key];
    }

    return Object.values(menuItems)[0]
}