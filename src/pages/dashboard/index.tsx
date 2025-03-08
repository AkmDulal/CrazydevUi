import { Card, CardContent } from '@/components/ui/card';
import { Info, Square, X } from 'lucide-react';
import CloudIcon from "@/assets/cloud_Icon.svg";
import MaskGroup from "@/assets/mask_group.svg";
import UrlIcon from "@/assets/url_icon.svg";
import IconsDropbox from "@/assets/Icons_dropbox.svg";
import IconsGoogle from "@/assets/Icons_google.svg";
import FilesOrg from "@/assets/Files_org.svg";
import FilesBlue from "@/assets/Files_blue.svg";
import IconDeep from "@/assets/icon_deep.svg";

export default function DashboardPage() {
  return (
    <div className="max-h-screen flex-1 space-y-6 overflow-y-auto p-4 pt-6 md:p-8">
      <div className="flex items-center justify-center">
        <p className='text-white text-[10px] md:text-sm  flex gap-2 items-center text-center justify-center w-full'>
          <Info size={16} className='text-[#FB9937]' />
          The web version does not display local chats. To access all features, please
          <span className='text-[#FB9937] font-semibold'> install the app.</span>
        </p>
      </div>
      
      <div className="text-center">
        <p className='text-white text-3xl md:text-5xl font-semibold flex justify-center items-center gap-2'>
          Add Files to <img src={CloudIcon} alt="Cloud" className="w-8 md:w-12" /> Cloud Chat
        </p>
      </div>
      
      <div className="text-center space-y-1">
        <p className='text-gray-400 text-sm font-semibold'>
          Your files will not be stored on our servers and no AI models will be trained.
        </p>
        <p className='text-[#F37F0C] text-sm font-semibold'>
          Supported File Types: .docx, .pdf, .epub, and many text filetypes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 md:px-12">
        <Card className='pt-6'>
          <CardContent className='flex gap-4 items-center'>
            <img src={MaskGroup} alt=""  />
            <p className='text-lg font-semibold'>Drag & drop local files here, or click to select</p>
          </CardContent>
        </Card>
        <Card className='pt-6'>
          <CardContent>
            <div className='w-full'>
              <div className='flex gap-4 items-start'>
                <img className='mt-[10px] ' src={UrlIcon} alt="" />
                <div className="w-full">
                  <p className='text-lg font-semibold'>Enter a public URL:</p>
                  <div className="relative w-full">
                    <input type="text" className="w-full bg-[#353535] mt-2 px-3 py-2 rounded-full focus:outline-none" placeholder="https://example.com/file.pdf" />
                    <button className='absolute right-0 top-2 py-2 px-4 rounded-full bg-[#FFFFFF26]'>Add</button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className='pt-6'>
          <CardContent className='flex gap-4 items-center'>
            <img src={IconsDropbox} alt="Dropbox"  />
            <p className='text-lg font-semibold'>Add files from Dropbox</p>
          </CardContent>
        </Card>
        <Card className='pt-6'>
          <CardContent className='flex gap-4 items-center'>
            <img src={IconsGoogle} alt="Google Drive"  />
            <p className='text-lg font-semibold'>Add files from Google Drive</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="px-4 md:px-12 mt-4">
        <div className='bg-[#242424] p-3 rounded-full flex flex-col sm:flex-row gap-3'>
          {[FilesOrg, FilesBlue].map((file, index) => (
            <div key={index} className='flex gap-3 py-3 px-4 rounded-full items-center bg-[#2B2B2B] group w-full sm:w-auto'>
              <div className='flex gap-2 items-center'>
                <img src={file} alt="File"  />
                <p className='text-sm text-white'>Report_file.pdf</p>
              </div>
              <div className='flex gap-2 items-center'>
                <Square size={16} color='#B7B7B7' />
                <p className='text-sm text-white'>Force OCR</p>
                <Info size={16} color='#585858' />
              </div>
              <X size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-10'>
        <button className="border !border-[#FB9937] !text-[#fff] py-2 px-8 rounded-full text-[#FB9937] font-medium">
          Start
        </button>
        <span className='text-white'>or</span>
        <button className='flex gap-3 justify-center items-center bg-gradient-to-b from-[#FFBF00] to-[#FB9937] py-2 px-6 rounded-full'>
          <img src={IconDeep} alt="Deep Dive" className="w-6" /> Start with Deep Dive
        </button>
      </div>
    </div>
  );
}
