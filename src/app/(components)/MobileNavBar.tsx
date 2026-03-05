import { icon } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";


interface NavLink {
  label: string;
  path?: string;
  submenu?: NavLink[];
}
const MobileNavBar = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}) => {
  //const [isOpen, setOpen ] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const mobileNavLinks: NavLink[] = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Gallery", path: "/about/gallery" },
    { label: "Student Gallery", path: "https://naiminathayurveda.org/about/student-gallery" },
    {
      label: "Hospital",
      submenu: [
        {
          label: "Opd",
          path: "/hospital/opd",
          submenu: [
            { label: "Kayachikitsa", path: "/hospital/opd?id=0" },
            { label: "Kaumarbhritya", path: "/hospital/opd?id=1" },
            { label: "Panchkarma", path: "/hospital/opd?id=2" },
            {
              label: "Prasuti & Stri Roga",
              path: "/hospital/opd?id=3",
            },
            { label: "Shalakya Tantra", path: "/hospital/opd?id=4" },
            { label: "Shalya Tantra", path: "/hospital/opd?id=5" },
            { label: "Swasthavritta", path: "/hospital/opd?id=6" },
          ],
        },
        { label: "Ipd", path: "/hospital/ipd" },
        { label: "Medical Superintendent", path: "/hospital/medical-sup" },
      ],
    },
    {
      label: "College",
      submenu: [
        { label: "Courses Offered", path: "/college/course" },
        { label: "Faculty", path: "/college/faculty" },
        { label: "Principals Profile", path: "/college/principle-profile" },
      ],
    },
    { label: "Ncism", path: "/ncism" },
    { label: "Blog", path: "/blog" },
    { label: "Facilities", path: "/facilities" },
    { label: "Contact", path: "/contactus" },
    { label: "Digital Garden", path: "/digitalgarden" },
    { label: "Faculty", path: "/faculty" },
    { label: "Admission Open", path: "https://bams-admission.vercel.app/" },
    // Add other links as needed
  ];

  const handleOutsideClick = (event: MouseEvent) => {
    if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
      // Clicked outside the target element
      setOpen(!isOpen);
    }
  };

  useEffect(() => {
    // Attach event listener on component mount
    document.addEventListener('click', handleOutsideClick);

    // Detach event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const renderMenuItems = (items: NavLink[]) =>
    items.map((item, index) => (
      <div key={index}>
        {!item.submenu && (
          <MenuItem onClick={() => {

            router.push(item.path || "")
            setOpen(!isOpen)
          }}>
            {item.label}
          </MenuItem>
        )}

        {item.submenu && (
          <SubMenu label={item.label}>
            {renderMenuItems(item.submenu)}
          </SubMenu>
        )}
      </div>
    ));

  return (
    <div ref={targetRef}>
      <Sidebar
        width={isOpen ? "250px" : "0px"}
        style={{
          height: "80vh",
          backgroundColor: "white",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          border: "2px solid #cbd5e0",
          overflowY: "auto",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#888 #f0f0f0", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
          // @ts-ignore
          "&::-webkit-scrollbar": {
            width: "12px", // Adjust the width as needed
          },
          // @ts-ignore
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Color of the scrollbar thumb
          },
        }}
      >
        <Menu className=" text-sm">
          <MenuItem
            className=" justify-end flex"
            onClick={() => setOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faClose} />
          </MenuItem>
          {renderMenuItems(mobileNavLinks)}

          {/* <MenuItem> Home </MenuItem>
          <MenuItem> About us</MenuItem>
          <MenuItem> Gallery </MenuItem>
          <SubMenu label="Hospital">
            <SubMenu label="Opd">
              <MenuItem>Kayachikitsa</MenuItem>
              <MenuItem>Kaumarbhritya</MenuItem>
              <MenuItem>Panchkarma</MenuItem>
              <MenuItem>Prasuti & Stri Roga</MenuItem>
              <MenuItem>Shalakya Tantra</MenuItem>
              <MenuItem>Shalya Tantra</MenuItem>
              <MenuItem>Swasthavritta</MenuItem>
            </SubMenu>
            <MenuItem>Ipd</MenuItem>
            <MenuItem>Medical Superintendent</MenuItem>
          </SubMenu>
          <SubMenu label="College" className="">
            <MenuItem> Courses Offered </MenuItem>
            <MenuItem> Faculty </MenuItem>
            <MenuItem> Principals Profile </MenuItem>
          </SubMenu>
          <MenuItem> Ncism </MenuItem>
          <MenuItem> Blog </MenuItem>
          <MenuItem> Facilities </MenuItem>
          <MenuItem> Contact </MenuItem> */}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MobileNavBar;
