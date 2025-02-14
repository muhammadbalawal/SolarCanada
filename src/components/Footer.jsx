export default function Footer() {
    return (
      <footer className="bg-[#1b7646] py-[38px] px-[33px] " id="footer" >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          {/* Mailing Address */}
          <div className="flex-1 text-left">
            <h2 className="font-bold text-sm sm:text-2xl">Mailing Address</h2>
            <p className="font-medium text-[8px] sm:text-sm">40 Rue Caribou</p>
            <p className="font-medium text-[8px] sm:text-sm">Kirkland, QC</p>
            <p className="font-medium text-[8px] sm:text-sm">H9J 2H8</p>
          </div>
  
          {/* Copyright */}
          <div>
            <p className="font-medium text-[8px] sm:text-sm">
              Solaire Canada Solar © 2025
            </p>
          </div>
  
          {/* Contact Info */}
          <div className="flex-1 text-right">
            <h2 className="font-bold text-sm sm:text-2xl">Phone</h2>
            <p className="font-medium text-[8px] sm:text-sm">(514) 659-5804</p>
            <h2 className="font-bold text-sm sm:text-2xl">Email</h2>
            <p className="font-medium text-[8px] sm:text-sm underline">
              rsvp@solairecanadasolar.com
            </p>
          </div>
        </div>
      </footer>
    );
  }