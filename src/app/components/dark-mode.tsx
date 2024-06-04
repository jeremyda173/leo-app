import React from "react";

interface DarkModeProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ darkMode, toggleDarkMode }) => {
    // Clases condicionales para los estilos del switch de modo oscuro
    const switchBgClass = darkMode ? "bg-[rgb(26,26,26)]" : "bg-white";
    const switchShadowClass = darkMode ? "shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)]" : "shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]";

    return (
        <label
            className="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]"
        >
            <span className="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
            <div
                className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]"
            >
                <div className="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"></div>
            </div>
            <div
                className="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"
            ></div>
            <input className="peer h-[1em] w-[1em] opacity-0" id="toggleDarkMode" name="" type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span
                className={`absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full ${switchBgClass} ${switchShadowClass} duration-300 peer-checked:left-[calc(100%-2.75em)]`}
            >
                <span className="relative h-full w-full rounded-full">
                    <span className="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                </span>
            </span>
        </label>
    );
}

export default DarkMode;
