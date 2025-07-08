import { ImWhatsapp } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";

import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-5 right-10 z-50 flex flex-col gap-3">
    {/* noopener - new page can not controll on previous page that means our previour page is completely secure */}
    {/* noreferrer - new page can not even know about website name url its better for privacy and prevent from hacking  */}
      <a
        href="https://wa.me/919665315607?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="blank"
         rel="noopener noreferrer"
      >
        <ImWhatsapp className="bg-green-500 text-white size-12 border-2 border-white  p-3 rounded-full shadow-lg hover:scale-110 transition transform"  />
      </a>

       {/* Messenger */}
      <a
        href="https://m.me/najiya.sheikh.98?ref=Hi%20I%20am%20interested"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookMessenger className="bg-blue-500 text-white size-12 border-2 border-white  p-3 rounded-full shadow-lg hover:scale-110 transition transform"  />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane  className="bg-blue-400 text-white size-12 border-2 border-white  p-3 rounded-full shadow-lg hover:scale-110 transition transform"   />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
