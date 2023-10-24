"use client"
import { Button } from "@/components/ui/button";
import Page from './../(auth)/(routes)/sign-up/[[...sign-up]]/page';
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";

const SetupPage=()=> {
  return (
    <div >
    <Modal  title="Test" description="Test Desc" isOpen onClose={()=>{}}  >
    
      Children
      
      </Modal>
      </div>
  )
}
export default SetupPage;