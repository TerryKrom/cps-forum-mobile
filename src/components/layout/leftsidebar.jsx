import { SideBarLink, SideBarSectionLink } from "../../components/layout/sidebar-nav";
import { links, materialsLinks, sectionlinks } from "../data/section-data";

const LeftSidebar = ({isCollapsed, isMaterials }) => {
    return (
        <>
            <SideBarLink
                isCollapsed={isCollapsed}
                links={links} />
            <SideBarSectionLink
                isCollapsed={isCollapsed}
                links={isMaterials ? materialsLinks.slice(0) : sectionlinks.slice(1)} 
            />
        </>
    )
}

export default LeftSidebar;