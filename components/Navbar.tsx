import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";

const Navbar = () => {
    return(
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    this will be a store switcher
                </div>
                <MainNav className=""/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
  
    );

}
export default Navbar;