export interface SideBarItemsType {
    path: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    text: string,
    authOnly?: boolean,
}

