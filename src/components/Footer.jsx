export default function Footer() {
    return (
        <footer className="bg-[#1b7646] py-[38px] px-[33px]">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
                {/* Mailing Address */}
                <div className="flex-1 text-left">
                    <h2 className="font-bold text-2xl">Mailing Address</h2>
                    <p className="font-medium text-sm">40 Rue Caribou</p> {/* Decreased size to text-sm */}
                    <p className="font-medium text-sm">Kirkland, QC</p> {/* Decreased size to text-sm */}
                    <p className="font-medium text-sm">H9J 2H8</p> {/* Decreased size to text-sm */}
                </div>

                {/* Copyright */}
                <div>
                    <p className="font-medium text-sm">Solaire Canada Solar © 2025</p> {/* Decreased size to text-sm */}
                </div>

                {/* Contact Info */}
                <div className="flex-1 text-right">
                    <h2 className="font-bold text-2xl">Phone</h2>
                    <p className="font-medium text-sm">(514) 659-5804</p> {/* Decreased size to text-sm */}
                    <h2 className="font-bold text-2xl">Email</h2>
                    <p className="font-medium text-sm underline">rsvp@solairecanadasolar.com</p> {/* Decreased size to text-sm */}
                </div>
            </div>
        </footer>
    );
}
