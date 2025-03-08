import DashboardNav from '@/components/shared/dashboard-nav';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { navItems } from '@/constants/data';
import { Dispatch, SetStateAction, useState } from 'react';
import { X } from 'lucide-react';
import LogoImg from "@/assets/Logo_icon.svg"
import Search from "@/assets/icon_search.svg"
import IconFlow from "@/assets/icon_flow.svg"
import UserAvatar from "@/assets/user_avatar.svg"
import IcoSettings from "@/assets/icon_settings.svg"
import UserNav from './user-nav';



type TMobileSidebarProps = {
  className?: string;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
};
export default function MobileSidebar({
  setSidebarOpen,
  sidebarOpen
}: TMobileSidebarProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev);
  };
  return (
    <>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="bg-background !px-0 ">
          <div className="space-y-4 py-4">
            <div className="space-y-4 px-3 py-2">
            <div className='flex w-full justify-between'>
            <div className='flex'>
            <img src={LogoImg} alt="logo" />
            <h1 className="text-2xl font-bold pl-3">socrates</h1>
            </div>
            <div className='flex '>
              <img src={Search} onClick={handleSearchToggle} alt="search" className='mr-2' />
              </div>
            </div>
            {isSearchVisible && (
              <div className="relative mt-2 px-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                  placeholder="Search..."
                />
                <X size={15} onClick={handleSearchToggle} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer " />
              </div>
            )}
              <div className="space-y-1 px-2">
                <DashboardNav items={navItems} setOpen={setSidebarOpen} />
              </div>
            </div>


           
          </div>

          <div className="py-4 px-3 bg-bg-secondary relative fixed bottom-0  w-full left-3  ">
        <div className='bg-background p-4 rounded-[12px]'>
            <p className="w-full text-white rounded-md font-[600]">
              Upgrade to Premium
            </p>
            <p className='text-[#868686] text-[12px]'> Make the most of all features! </p>
            <button className="w-full border border-[#F37F0C] text-[14px] flex justify-center rounded-full py-[10px] mt-2 hover:text-muted-foreground hover:text-black">
            Upgrade plan
            </button>
        </div>
        <div className="mt-3 flex text-[#fff] gap-3 items-center"> 
          <div className='bg-[#2B2B2B] p-[10px] rounded-full'>
            <img  src={IconFlow} alt="icon"></img>
          </div>
           <p className='text-[14px] font-[500] '> Flow AI Templates </p>
          </div>
        <div className="mt-3 flex text-[#fff] gap-3 items-center justify-between"> 
          <div className='flex gap-3 items-center '>
            <img  src={UserAvatar} alt="icon"></img>
           <p className='text-[14px] font-[500] '> Jessica Mills </p>
          </div>
          <UserNav imagesSet={IcoSettings} />
        </div>
      </div>
          

        </SheetContent>
      </Sheet>
    </>
  );
}
