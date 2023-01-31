import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black/40 p-1">
      <div className="flex h-full items-center justify-center">
        <span className="text-xs text-gray-200">
          Desenvolvido por{" "}
          <a
            className="font-semibold text-indigo-500 hover:text-indigo-600"
            href="https://rafaeldev.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rafaelsilva81
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
