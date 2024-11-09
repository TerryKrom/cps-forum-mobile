import { SideBarLink, SideBarSectionLink } from "../../components/layout/sidebar-nav";
import { links, materialsLinks, sectionlinks } from "../data/section-data";

const LeftSidebar = ({ isCollapsed, isMaterials, closeModal }) => {
    return (
        <>
            <SideBarLink
                isCollapsed={isCollapsed}
                links={links}
                closeModal={closeModal} 
            />
            <SideBarSectionLink
                isCollapsed={isCollapsed}
                links={isMaterials ? materialsLinks.slice(0) : sectionlinks.slice(1)}
                closeModal={closeModal} 
            />
        </>
    )
}

export default LeftSidebar;