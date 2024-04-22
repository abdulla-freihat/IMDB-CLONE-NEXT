"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode className="hover:text-amber-500 text-2xl cursor-pointer" onClick={()=>setTheme('light')} />
      ) : (
        <MdDarkMode className="hover:text-amber-500 text-2xl cursor-pointer"  onClick={()=>setTheme('dark')}/>
      )}
    </div>
  );
};

export default DarkModeSwitch;
